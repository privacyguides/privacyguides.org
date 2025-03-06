import requests
import os

GITHUB_API_URL = "https://api.github.com/graphql"
GITHUB_TOKEN = os.getenv("GH_TOKEN")
ORG_NAME = "privacyguides"

# Fetch members from the API
members_api_url = "https://discuss.privacyguides.net/g/members/members.json?offset=0&order=added_at&asc=true"
headers = {
  "Api-Key": os.getenv("DISCOURSE_API_KEY"),
  "Api-Username": "system"
}
members_response = requests.get(members_api_url, headers=headers)
members_data = members_response.json()

if 'members' not in members_data:
  raise KeyError("Response JSON does not contain 'members' key")

members = members_data['members']
private_members_count = 0

html_output = ""
for member in members:
  flair_name = member.get('flair_name')
  title = member.get('title')
  if flair_name == "members" or title == "Member":
    username = member['username']
    avatar_template = member['avatar_template']
    avatar_url = f"https://discuss.privacyguides.net{avatar_template.replace('{size}', '128')}"
    profile_url = f"https://discuss.privacyguides.net/u/{username}"
    html_output += f'<a href="{profile_url}" target="_blank" title="@{username}" class="mdx-donors__item"><img loading="lazy" src="{avatar_url}"></a>'
  else:
    private_members_count += 1

# print(html_output)

query = """
{
  organization(login: "%s") {
    sponsorshipsAsMaintainer(first: 100) {
      nodes {
        sponsorEntity {
          ... on User {
            login
            avatarUrl
            url
          }
          ... on Organization {
            login
            avatarUrl
            url
          }
        }
        createdAt
      }
    }
  }
}
""" % ORG_NAME

headers = {
    "Authorization": f"Bearer {GITHUB_TOKEN}",
    "Content-Type": "application/json"
}

response = requests.post(GITHUB_API_URL, json={'query': query}, headers=headers)
data = response.json()

if 'errors' in data:
    raise Exception(f"GraphQL query failed with errors: {data['errors']}")
if 'data' not in data:
    raise KeyError(f"Response JSON does not contain 'data' key: {data}")

sponsors = data['data']['organization']['sponsorshipsAsMaintainer']['nodes']

# Sort sponsors by the date they began their sponsorship
sponsors.sort(key=lambda x: x['createdAt'])

for sponsor in sponsors:
    sponsor_entity = sponsor['sponsorEntity']
    login = sponsor_entity['login']
    avatar_url = sponsor_entity['avatarUrl']
    url = sponsor_entity['url']
    html_output += f'<a href="{url}" title="@{login}" rel="ugc nofollow" target="_blank" class="mdx-donors__item"><img loading="lazy" src="{avatar_url}&size=120"></a>'

private_members_count += 6

# Append the count of private members
if private_members_count > 0:
  html_output += f'<a href="https://donate.magicgrants.org/privacyguides" class="mdx-donors__item mdx-donors__item--private">+{private_members_count}</a>'

print(html_output)

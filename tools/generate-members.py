import requests
import os

# Fetch members from the API
members_api_url = os.getenv('MEMBERS_API_URL', 'https://ghost.privacyguides.org/cache/members.json')
members_response = requests.get(members_api_url)
members_data = members_response.json()[0]

members = members_data['members']

html_output = ""
for member in members:
  username = member['username']
  html_output += f'<a href="{member['url']}" target="_blank" title="@{member['username']}" class="mdx-donors__item"><img loading="lazy" src="{member['avatar']}"></a>'

# Append the count of private members
if members_data['unaccounted'] > 0:
  html_output += f'<a href="https://donate.magicgrants.org/privacyguides" class="mdx-donors__item mdx-donors__item--private">+{members_data["unaccounted"]}</a>'

print(html_output)

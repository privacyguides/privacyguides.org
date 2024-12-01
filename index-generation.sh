#!/bin/bash

DATE_CMD="date"

# Check if the script is running on macOS
if [[ "$OSTYPE" == "darwin"* ]]; then
  DATE_CMD="gdate"
fi

# Defaults
source="https://discuss.privacyguides.net/top.json?period=weekly"
tag="top posts"
destination="./site/en/index.html"
count=3

for arg in "$@"
do
  case $arg in
    --source=*)
    source="${arg#*=}"
    shift
    ;;
    --tag=*)
    tag="${arg#*=}"
    shift
    ;;
    --destination=*)
    destination="${arg#*=}"
    shift
    ;;
    --count=*)
    count="${arg#*=}"
    shift
    ;;
  esac
done

# URL of the Discourse top.json
DISCOURSE_URL="$source"

# Fetch the JSON data
json_data=$(curl -s $DISCOURSE_URL)

# Extract the first 3 topics
topics=$(echo $json_data | jq -r ".topic_list.topics[:$count]")

users=$(echo $json_data | jq -r ".users")
# Generate HTML for the first 3 posts
html_output=""
for row in $(echo "${topics}" | jq -r '.[] | @base64'); do
  _jq() {
    echo ${row} | base64 --decode | jq -r ${1}
  }

  title=$(_jq '.title')
  id=$(_jq '.id')
  like_count=$(_jq '.like_count')
  reply_count=$(_jq '.posts_count')
  views=$(_jq '.views')

  author_id=$(_jq '.posters[0].user_id')
  author_info=$(echo "${users}" | jq -r ".[] | select(.id==$author_id)")
  author_username=$(echo "${author_info}" | jq -r ".username")

  html_output+="<li class='discourse-topic'>"
  html_output+="<p class='discourse-title'><a href='https://discuss.privacyguides.net/t/${id}'><strong>${title}</strong></a></p>"
  html_output+="<hr>"
  html_output+="<p class='discourse-author'>"
  html_output+="<span class='discourse-author'>"
  html_output+="<img src='https://forum-cdn.privacyguides.net/user_avatar/discuss.privacyguides.net/${author_username}/48/1.png' loading='lazy' aria-hidden='true' alt='${author_username}' width='20' height='20' class='middle'>"
  html_output+="<span> Posted by <em>$author_username</em></span>"
  html_output+="</span>"
  html_output+="</p>"
  html_output+="<p class='discourse-data'>"
  html_output+="<span class='twemoji'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>eye</title><path d='M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z' /></svg></span>"
  html_output+="<span class='discourse-views'> ${views} </span>"
  html_output+="<span class='twemoji pg-red'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>heart</title><path d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z' /></svg></span>"
  html_output+="<span class='discourse-likes'> ${like_count} </span>"
  html_output+="<span class='twemoji'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>reply</title><path d='M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z' /></svg></span>"
  html_output+="<span class='discourse-replies'> ${reply_count} </span>"
  html_output+="</p>"
  html_output+="</li>"
done

tempfile=$(mktemp)
echo "$html_output" > $tempfile

# Insert the HTML output between the comments in index.html
sed -i'.bak' "/<!-- start $tag -->/,/<!-- end $tag -->/{//!d;}; /<!-- start $tag -->/r $tempfile" $destination

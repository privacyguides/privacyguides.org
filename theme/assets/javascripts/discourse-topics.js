/**
 * @overview Generates a list of topics on a Discourse forum.
 * @author Jonah Aragon <jonah@triplebit.net>
 * @version 3.1.0
 * @license
 * Copyright (c) 2023 - 2024 Jonah Aragon
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

async function getData(url) {
  const response = await fetch(url);
  return response.json()
}

async function main() {
  const elements = document.querySelectorAll("ul[data-forum]");

  for (let j = 0; j < elements.length; j++) {

    var topics = elements[j];
    var dataset = topics.dataset;

    console.log("Fetching data from " + dataset.feed)
    const data = await getData(dataset.feed);
    var list = data['topic_list']['topics'];
    var profiles = data['users'];
    var count = dataset.count;

    for (var i = 0; i < count; i++) {

      if (list[i]['pinned'] == true) {
        count++;
        continue;
      }

      var title = list[i]['title'];
      var id = list[i]['id'];

      var topic = document.createElement("li");
      topic.className = "discourse-topic";

      var h3 = document.createElement('p');
      h3.className = "discourse-title";
      var a1 = document.createElement('a');

      a1.href = dataset.forum + '/t/' + id;

      var boldTitle = document.createElement('strong');
      boldTitle.innerText = title;
      a1.appendChild(boldTitle);
      h3.appendChild(a1);

      var authorinfo = document.createElement('p');
      authorinfo.className = "discourse-author";

      var author_id = list[i]['posters'][0]['user_id'];
      var author_data = profiles.find(profile => profile['id'] == author_id);
      var author = document.createElement('span');
      author.className = "discourse-author";
      var avatar = document.createElement('img');
      avatar.src = dataset.forum + author_data['avatar_template'].replace("{size}", "40");
      avatar.width = 20;
      avatar.height = 20;
      avatar.className = "middle";
      author.appendChild(avatar);
      var namespan = document.createElement('span');
      namespan.innerText = " Posted by " + author_data['username'];
      author.appendChild(namespan);
      authorinfo.appendChild(author);

      var postinfo = document.createElement('p');
      postinfo.className = "discourse-data";

      var dateIcon = document.createElement('span');
      dateIcon.className = "twemoji";
      dateIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 13.1c-.1 0-.3.1-.4.2l-1 1 2.1 2.1 1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2m-1.9 1.8-6.1 6V23h2.1l6.1-6.1-2.1-2M12.5 7v5.2l4 2.4-1 1L11 13V7h1.5M11 21.9c-5.1-.5-9-4.8-9-9.9C2 6.5 6.5 2 12 2c5.3 0 9.6 4.1 10 9.3-.3-.1-.6-.2-1-.2s-.7.1-1 .2C19.6 7.2 16.2 4 12 4c-4.4 0-8 3.6-8 8 0 4.1 3.1 7.5 7.1 7.9l-.1.2v1.8Z"></path></svg>';

      var date = document.createElement('span');
      date.className = "discourse-date";
      var datestring = list[i]['bumped_at'];
      var dateobject = new Date(datestring);
      var now = new Date();
      var diff = now - dateobject;
      var minutes = Math.floor(diff / 60000);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);
      if (days > 0) {
        if (days == 1) {
          date.innerText = " 1 day ago ";
        }
        else {
          date.innerText = " " + days + " days ago ";
        }
      }
      else if (hours > 0){
        if (hours == 1) {
          date.innerText = " 1 hour ago ";
        }
        else {
          date.innerText = " " + hours + " hours ago ";
        }
      }
      else {
        if (minutes == 1) {
          date.innerText = " 1 minute ago ";
        }
        else {
          date.innerText = " " + minutes + " minutes ago ";
        }
      }
      postinfo.appendChild(dateIcon);
      postinfo.appendChild(date);

      var likesicon = document.createElement('span');
      likesicon.classList = "twemoji pg-red";
      likesicon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"></path></svg>';

      var likes = document.createElement('span');
      likes.className = "discourse-likes";
      likes.innerText = " " + list[i]['like_count'] + " ";
      postinfo.appendChild(likesicon);
      postinfo.appendChild(likes);

      var replyIcon = document.createElement('span');
      replyIcon.classList = "twemoji";
      replyIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11Z"></path></svg>';

      var replies = document.createElement('span');
      replies.className = "discourse-replies";

      var reply_count = list[i]['posts_count'] - 1;
      if (reply_count == 1) {
        replies.innerText = "1 Reply"
      }
      else {
        replies.innerText = " " + reply_count
      }
      postinfo.appendChild(replyIcon);
      postinfo.appendChild(replies);

      topic.appendChild(h3);
      topic.appendChild(document.createElement('hr'));
      topic.appendChild(authorinfo);
      topic.appendChild(postinfo);
      topics.appendChild(topic);
    }
  }
}

main();

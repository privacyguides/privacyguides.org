/**
 * @overview Generates a list of topics on a Discourse forum.
 * @author Jonah Aragon <jonah@triplebit.net>
 * @version 3.0.0
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
  const elements = document.querySelectorAll("div[data-forum]");

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

      var topic = document.createElement("div");
      topic.className = "discourse-topic";

      var h3 = document.createElement('p');
      h3.className = "discourse-title";
      var a1 = document.createElement('a');

      a1.href = dataset.forum + '/t/' + id;

      a1.innerText = title;
      h3.appendChild(a1);

      var postinfo = document.createElement('ul');
      postinfo.className = "discourse-data";

      var date = document.createElement('li');
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
          date.innerText = "Last reply 1 day ago";
        }
        else {
          date.innerText = "Last reply " + days + " days ago";
        }
      }
      else if (hours > 0){
        if (hours == 1) {
          date.innerText = "Last reply 1 hour ago";
        }
        else {
          date.innerText = "Last reply "+  hours + " hours ago";
        }
      }
      else {
        if (minutes == 1) {
          date.innerText = "Last reply 1 minute ago";
        }
        else {
          date.innerText = "Last reply " + minutes + " minutes ago";
        }
      }
      postinfo.appendChild(date);

      var author_id = list[i]['posters'][0]['user_id'];
      var author_data = profiles.find(profile => profile['id'] == author_id);
      var author = document.createElement('li');
      author.className = "discourse-author";
      var avatar = document.createElement('img');
      avatar.src = dataset.forum + author_data['avatar_template'].replace("{size}", "40");
      avatar.width = 20;
      avatar.height = 20;
      author.appendChild(avatar);
      var namespan = document.createElement('span');
      namespan.innerText = " " + author_data['username'];
      author.appendChild(namespan);
      postinfo.appendChild(author);

      var likes = document.createElement('li');
      likes.className = "discourse-likes";
      if (list[i]['like_count'] == 1) {
        likes.innerText = "1 Like";
      }
      else {
        likes.innerText = list[i]['like_count'] + " Likes";
      }
      postinfo.appendChild(likes);

      var replies = document.createElement('li');
      replies.className = "discourse-replies";

      var reply_count = list[i]['posts_count'] - 1;
      if (reply_count == 1) {
        replies.innerText = "1 Reply"
      }
      else {
        replies.innerText = reply_count + " Replies"
      }
      postinfo.appendChild(replies);

      topic.appendChild(h3);
      topic.appendChild(postinfo);
      topics.appendChild(topic);
    }
  }
}

main();

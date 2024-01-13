// explore.js
document.addEventListener('DOMContentLoaded', () => {
 fetch('explore.json')
    .then(response => response.json())
    .then(data => {
      let container = document.createElement('div');
      container.className = 'tweet';

      let avatar = document.createElement('img');
      avatar.src = data.avatar;
      avatar.className = 'avatar';

      let username = document.createElement('a');
      username.href = data.username;
      username.textContent = 'Max';
      username.className = 'username';

      let handle = document.createElement('h5');
      handle.textContent = data.handle;
      handle.className = 'handle';

      let content = document.createElement('p');
      content.textContent = data.content;
      content.className = 'content';

      let image = document.createElement('img');
      image.src = data.image;
      image.className = 'image';
     
      let likesicon = document.createElement('img');
      likesicon.src = data.likesicon;
      likesicon.className = 'likesicon';
     
      let likes = document.createElement('p');
      likes.textContent = data.likes;
      likes.className = 'likes';
     
      let commentsicon = document.createElement('img');
      commentsicon.src = data.commentsicon;
      commentsicon.className = 'commentsicon';
     
      let comments = document.createElement('p');
      comments.textContent = data.comments;
      comments.className = 'comments'; 

      let sharesicon = document.createElement('img');
      sharesicon.src = data.sharesicon;
      sharesicon.className = 'sharesicon';
     
      let shares = document.createElement('p');
      shares.textContent = data.shares;
      shares.className = 'shares'; 
     
      let more = document.createElement('img');
      more.src = data.more;
      more.className = 'more';
     
      let link = document.createElement('a');
      link.href = data.link;
      link.textContent = 'Learn More';
      link.className = 'link';

      container.appendChild(avatar);
      container.appendChild(username);
      container.appendChild(handle);
      container.appendChild(content);
      container.appendChild(image);
      container.appendChild(likesicon);
      container.appendChild(likes);
      container.appendChild(commentsicon);
      container.appendChild(comments);
      container.appendChild(sharesicon);
      container.appendChild(shares);
      container.appendChild(more);
      container.appendChild(link);

      document.body.appendChild(container);
    });
});

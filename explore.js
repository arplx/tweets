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

      let link = document.createElement('a');
      link.href = data.link;
      link.textContent = 'Learn More';
      link.className = 'link';

      container.appendChild(avatar);
      container.appendChild(username);
      container.appendChild(handle);
      container.appendChild(content);
      container.appendChild(image);
      container.appendChild(link);

      document.body.appendChild(container);
    });
});

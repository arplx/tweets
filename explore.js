// Fetch the JSON data
fetch('explore.json')
  .then(response => response.json())
  .then(data => {
    // Display the user profile
    const userProfile = document.getElementById('user-profile');
    const userProfileHTML = `
      <img src="${data.user.profilePicture}" alt="Profile Picture" />
      <p>Username: ${data.user.username}</p>
    `;
    userProfile.innerHTML = userProfileHTML;

    // Display the first post
    const post = document.getElementById('post');
    const postHTML = `
      <img src="${data.user.posts[0].postImage}" alt="Post Image" />
      <p>${data.user.posts[0].caption}</p>
      <p>Likes: ${data.user.posts[0].likes}</p>
      <ul id="comments"></ul>
    `;
    post.innerHTML = postHTML;

    // Display the comments for the first post
    const comments = document.getElementById('comments');
    data.user.posts[0].comments.forEach(comment => {
      const commentHTML = `
        <li>
          <strong>${comment.username}:</strong> ${comment.comment}
        </li>
      `;
      comments.innerHTML += commentHTML;
    });
  })
  .catch(error => console.error('Error fetching data:', error));

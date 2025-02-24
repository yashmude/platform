// script.js
/*
// Toggles the sidebar visibility when the hamburger menu is clicked
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
});

// Closes the sidebar when the close button is clicked
document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('active');
});

// Post creation
// Initialize posts array to store post data
let posts = [];

// Function to render posts and their comments dynamically
function renderPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = ""; // Clear current posts

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <div class="post-header">
                <img src="default-avatar.png" alt="User Avatar">
                <span class="username">@username</span>
            </div>
            <div class="post-content">
                ${post.content}
            </div>
            <div class="post-actions">
                <i class="fas fa-thumbs-up"></i>
                <i class="fas fa-share-alt"></i>
            </div>
            <div class="comment-section" id="comment-section-${index}">
                ${post.comments.map(comment => `
                    <div class="comment">
                        <img src="default-avatar.png" alt="User Avatar">
                        <div class="comment-text">${comment}</div>
                        <div class="post-actions">
                            <i class="fas fa-thumbs-up"></i>     
                            <i class="fas fa-share-alt"></i>
                        </div>
                    </div>
                `).join('')}
                <div class="comment">
                    <img src="default-avatar.png" alt="User Avatar">
                    <input type="text" placeholder="Add a comment..." id="new-comment-${index}">
                    <button onclick="addComment(${index})">Comment</button>
                </div>
            </div>
        `;
        postList.appendChild(postElement);
    });
}

// Function to handle new post creation
function createPost() {
    const postContent = document.getElementById('post-content').value;
    if (postContent.trim() === "") {
        alert("Please enter something to post.");
        return;
    }
    const newPost = {
        content: postContent,
        comments: [] // Initialize an empty array for comments
    };
    posts.push(newPost); // Add the new post to the posts array
    document.getElementById('post-content').value = ''; // Clear the textarea
    renderPosts(); // Re-render the posts list with the new post
}

// Function to handle adding a comment
function addComment(postIndex) {
    const commentInput = document.getElementById(`new-comment-${postIndex}`);
    const commentText = commentInput.value.trim();
    if (commentText === "") {
        alert("Please enter a comment.");
        return;
    }
    posts[postIndex].comments.push(commentText); // Add the comment to the specific post
    commentInput.value = ''; // Clear the comment input
    renderPosts(); // Re-render the posts to display the new comment
}

// Event listener for the post button
document.querySelector('.post-btn').addEventListener('click', createPost);

// Initial rendering of posts
renderPosts();


// Like button toggle
function toggleLike(likeIcon) {
    const likebutton = document.querySelector(`.fas fa-thumbs-up[data-id='${likeIcon}']`);
    if (likeIcon.classList.contains('liked')) {
        likeIcon.style.color = "#007bff"; // Change color when liked
    } else {
        likeIcon.style.color = "#555"; // Default color
    }
}

// Follow button toggle
function toggleFollow(userId) {
    const followButton = document.querySelector(`.follow-btn[data-id='${userId}']`);
    if (followButton.innerText === "Follow") {
        followButton.innerText = "Following";
        followButton.style.backgroundColor = "#28a745"; // Green for following
    } else {
        followButton.innerText = "Follow";
        followButton.style.backgroundColor = "#007bff"; // Default blue
    }
}
*/
/*
// Toggles the sidebar visibility when the hamburger menu is clicked
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
});

// Closes the sidebar when the close button is clicked
document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('active');
});

// Post creation
// Initialize posts array to store post data
let posts = [];

// Function to render posts and their comments dynamically
function renderPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = ""; // Clear current posts

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <div class="post-header">
                <img src="default-avatar.png" alt="User Avatar">
                <span class="username">@username</span>
            </div>
            <div class="post-content">
                ${post.content}
            </div>
            <div class="post-actions">
                <i class="fas fa-thumbs-up ${post.likes > 0 ? 'liked' : ''}" 
                   onclick="toggleLike(${index})" style="cursor: pointer;">
                </i> ${post.likes} Likes
                <i class="fas fa-share-alt"></i>
            </div>
            <div class="comment-section" id="comment-section-${index}">
                ${post.comments.map(comment => `
                    <div class="comment">
                        <img src="default-avatar.png" alt="User Avatar">
                        <div class="comment-text">${comment}</div>
                    </div>
                `).join('')}
                <div class="comment">
                    <img src="default-avatar.png" alt="User Avatar">
                    <input type="text" placeholder="Add a comment..." id="new-comment-${index}">
                    <button onclick="addComment(${index})">Comment</button>
                </div>
            </div>
        `;
        postList.appendChild(postElement);
    });
}


// Function to handle new post creation
function createPost() {
    const postContent = document.getElementById('post-content').value;
    if (postContent.trim() === "") {
        alert("Please enter something to post.");
        return;
    }
    const newPost = {
        content: postContent,
        comments: [], // Initialize an empty array for comments
        likes: 0 // Initialize likes for the post
    };
    posts.push(newPost); // Add the new post to the posts array
    document.getElementById('post-content').value = ''; // Clear the textarea
    renderPosts(); // Re-render the posts list with the new post
}

// Function to handle adding a comment
function addComment(postIndex) {
    const commentInput = document.getElementById(`new-comment-${postIndex}`);
    const commentText = commentInput.value.trim();
    if (commentText === "") {
        alert("Please enter a comment.");
        return;
    }
    posts[postIndex].comments.push(commentText); // Add the comment to the specific post
    commentInput.value = ''; // Clear the comment input
    renderPosts(); // Re-render the posts to display the new comment
}

// Function to handle like button toggle
function toggleLike(postIndex) {
    const post = posts[postIndex];
    const likeIcon = document.querySelectorAll('.post')[postIndex].querySelector('.fa-thumbs-up');

    if (likeIcon.classList.contains('liked')) {
        // If already liked, remove liked state
        likeIcon.classList.remove('liked');
        post.likes--; // Decrease like count
        likeIcon.style.color = "#555"; // Default color
        likeIcon.style.transform = "scale(1)"; // Reset size
    } else {
        // If not liked, add liked state
        likeIcon.classList.add('liked');
        post.likes++; // Increase like count
        likeIcon.style.color = "#007bff"; // Liked color
        likeIcon.style.transform = "scale(1.3)"; // Slightly larger size
    }

    renderPosts(); // Re-render the posts to reflect the updated like count
}


// Event listener for the post button
document.querySelector('.post-btn').addEventListener('click', createPost);

// Initial rendering of posts
renderPosts();

// Follow button toggle
function toggleFollow(userId) {
    const followButton = document.querySelector(`.follow-btn[data-id='${userId}']`);
    if (followButton.innerText === "Follow") {
        followButton.innerText = "Following";
        followButton.style.backgroundColor = "#28a745"; // Green for following
    } else {
        followButton.innerText = "Follow";
        followButton.style.backgroundColor = "#007bff"; // Default blue
    }
}
*/

// script.js

// Toggles the sidebar visibility when the hamburger menu is clicked
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
});

// Closes the sidebar when the close button is clicked
document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('active');
});

// Post creation
let posts = [];

// Function to render posts and their comments dynamically
function renderPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = ""; // Clear current posts

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <div class="post-header">
                <img src="img/userprofile.png" alt="User Avatar">
                <span class="username">@Jack</span>
            </div>
            <div class="post-content">
                ${post.content}
            </div>
            <div class="post-actions">
                <i class="fas fa-thumbs-up ${post.likes > 0 ? 'liked' : ''}" 
                   onclick="toggleLike(${index})" style="cursor: pointer;">
                </i> ${post.likes} Likes
                <i class="fas fa-share-alt"></i>
            </div>
            <div class="comment-section" id="comment-section-${index}">
                ${post.comments ? post.comments.map(comment => `
                    <div class="comment">
                        <img src="img/userprofile2.png" alt="User Avatar">
                        <div class="comment-text">${comment}</div>
                    </div>
                `).join('') : ''}
                <div class="comment">
                    <img src="img/userprofile3.png" alt="User Avatar">
                    <input type="text" placeholder="Add a comment..." id="new-comment-${index}">
                    <button onclick="addComment(${index})">Comment</button>
                </div>
            </div>
        `;
        postList.appendChild(postElement);
    });
}

// Fetch posts from the server
async function fetchPosts() {
    try {
        const response = await fetch('http://localhost:3000/api/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        posts = await response.json();
        renderPosts();
    } catch (error) {
        console.error(error);
    }
}

// Function to handle new post creation
async function createPost() {
    const postContent = document.getElementById('post-content').value;
    if (postContent.trim() === "") {
        alert("Please enter something to post.");
        return;
    }
    const newPost = { content: postContent, likes: 0 };

    try {
        const response = await fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        });
        if (!response.ok) {
            throw new Error('Failed to create post');
        }
        const savedPost = await response.json();
        posts.push(savedPost);
        document.getElementById('post-content').value = ''; // Clear the textarea
        renderPosts();
    } catch (error) {
        console.error(error);
    }
}

// Function to handle adding a comment
async function addComment(postIndex) {
    const commentInput = document.getElementById(`new-comment-${postIndex}`);
    const commentText = commentInput.value.trim();
    if (commentText === "") {
        alert("Please enter a comment.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/posts/${posts[postIndex]._id}/comment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: commentText })
        });
        if (!response.ok) {
            throw new Error('Failed to add comment');
        }
        const updatedPost = await response.json();
        posts[postIndex] = updatedPost;
        renderPosts();
    } catch (error) {
        console.error(error);
    }
}

// Function to handle like button toggle
async function toggleLike(postIndex) {
    const post = posts[postIndex];

    try {
        const response = await fetch(`http://localhost:3000/api/posts/${post._id}/like`, {
            method: 'PATCH'
        });
        if (!response.ok) {
            throw new Error('Failed to like post');
        }
        const updatedPost = await response.json();
        posts[postIndex] = updatedPost;
        renderPosts();
    } catch (error) {
        console.error(error);
    }
}

// Event listener for the post button
document.querySelector('.post-btn').addEventListener('click', createPost);

// Follow button toggle
function toggleFollow(userId) {
    const followButton = document.querySelector(`.follow-btn[data-id='${userId}']`);
    if (followButton.innerText === "Follow") {
        followButton.innerText = "Following";
        followButton.style.backgroundColor = "#28a745"; // Green for following
    } else {
        followButton.innerText = "Follow";
        followButton.style.backgroundColor = "#007bff"; // Default blue
    }
}

// Initial rendering of posts
fetchPosts();

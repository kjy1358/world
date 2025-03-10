document.addEventListener('DOMContentLoaded', function() {
    const postList = document.getElementById('post-list');
    const newPostForm = document.getElementById('new-post-form');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    const postImage = document.getElementById('post-image');

    // 포스트 데이터를 저장할 배열
    let posts = [];

    // 포스트 데이터를 로컬 스토리지에서 불러오기
    function loadPosts() {
        const storedPosts = localStorage.getItem('posts');
        if (storedPosts) {
            posts = JSON.parse(storedPosts);
            renderPosts();
        }
    }

    // 포스트 리스트를 화면에 렌더링
    function renderPosts() {
        postList.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                ${post.image ? `<img src="${post.image}" alt="포스트 이미지">` : ''}
                <button class="delete-btn" data-index="${index}">삭제</button>
            `;
            postList.appendChild(postElement);
        });

        // 삭제 버튼에 이벤트 리스너 추가
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                deletePost(index);
            });
        });
    }

    // 새 포스트 작성 폼 제출 이벤트 핸들러
    newPostForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = postTitle.value;
        const content = postContent.value;
        const imageFile = postImage.files[0];

        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageData = e.target.result;
                addPost(title, content, imageData);
            };
            reader.readAsDataURL(imageFile);
        } else {
            addPost(title, content, null);
        }
    });

    // 포스트 추가 함수
    function addPost(title, content, image) {
        const newPost = { title, content, image };
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts();
        postTitle.value = '';
        postContent.value = '';
        postImage.value = '';
    }

    // 포스트 삭제 함수
    function deletePost(index) {
        posts.splice(index, 1);
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts();
    }

    // 페이지 로드 시 포스트 데이터를 불러와서 렌더링
    loadPosts();
});document.addEventListener('DOMContentLoaded', function() {
    const postList = document.getElementById('post-list');
    const newPostForm = document.getElementById('new-post-form');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    const postImage = document.getElementById('post-image');

    // 포스트 데이터를 저장할 배열
    let posts = [];

    // 포스트 데이터를 로컬 스토리지에서 불러오기
    function loadPosts() {
        const storedPosts = localStorage.getItem('posts');
        if (storedPosts) {
            posts = JSON.parse(storedPosts);
            renderPosts();
        }
    }

    // 포스트 리스트를 화면에 렌더링
    function renderPosts() {
        postList.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                ${post.image ? `<img src="${post.image}" alt="포스트 이미지">` : ''}
                <button class="delete-btn" data-index="${index}">삭제</button>
            `;
            postList.appendChild(postElement);
        });

        // 삭제 버튼에 이벤트 리스너 추가
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                deletePost(index);
            });
        });
    }

    // 새 포스트 작성 폼 제출 이벤트 핸들러
    newPostForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = postTitle.value;
        const content = postContent.value;
        const imageFile = postImage.files[0];

        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageData = e.target.result;
                addPost(title, content, imageData);
            };
            reader.readAsDataURL(imageFile);
        } else {
            addPost(title, content, null);
        }
    });

    // 포스트 추가 함수
    function addPost(title, content, image) {
        const newPost = { title, content, image };
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts();
        postTitle.value = '';
        postContent.value = '';
        postImage.value = '';
    }

    // 포스트 삭제 함수
    function deletePost(index) {
        posts.splice(index, 1);
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts();
    }

    // 페이지 로드 시 포스트 데이터를 불러와서 렌더링
    loadPosts();
});document.addEventListener('DOMContentLoaded', function() {
    const postList = document.getElementById('post-list');
    const newPostForm = document.getElementById('new-post-form');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    const postImage = document.getElementById('post-image');

    // 포스트 데이터를 저장할 배열
    let posts = [];

    // 포스트 데이터를 로컬 스토리지에서 불러오기
    function loadPosts() {
        const storedPosts = localStorage.getItem('posts');
        if (storedPosts) {
            posts = JSON.parse(storedPosts);
            renderPosts();
        }
    }

    // 포스트 리스트를 화면에 렌더링
    function renderPosts() {
        postList.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                ${post.image ? `<img src="${post.image}" alt="포스트 이미지">` : ''}
                <button class="delete-btn" data-index="${index}">삭제</button>
            `;
            postList.appendChild(postElement);
        });

        // 삭제 버튼에 이벤트 리스너 추가
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                deletePost(index);
            });
        });
    }

    // 새 포스트 작성 폼 제출 이벤트 핸들러
    newPostForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = postTitle.value;
        const content = postContent.value;
        const imageFile = postImage.files[0];

        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageData = e.target.result;
                addPost(title, content, imageData);
            };
            reader.readAsDataURL(imageFile);
        } else {
            addPost(title, content, null);
        }
    });

    // 포스트 추가 함수
    function addPost(title, content, image) {
        const newPost = { title, content, image };
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts();
        postTitle.value = '';
        postContent.value = '';
        postImage.value = '';
    }

    // 포스트 삭제 함수
    function deletePost(index) {
        posts.splice(index, 1);
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts();
    }

    // 페이지 로드 시 포스트 데이터를 불러와서 렌더링
    loadPosts();
});

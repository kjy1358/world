document.addEventListener('DOMContentLoaded', function() {
    const postList = document.getElementById('post-list');
    const newPostForm = document.getElementById('new-post-form');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');

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
            `;
            postList.appendChild(postElement);
        });
    }

    // 새 포스트 작성 폼 제출 이벤트 핸들러
    newPostForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = postTitle.value;
        const content = postContent.value;

        // 새 포스트 객체 생성 후 배열에 추가
        const newPost = { title, content };
        posts.push(newPost);

        // 로컬 스토리지에 저장
        localStorage.setItem('posts', JSON.stringify(posts));

        // 포스트 리스트 렌더링
        renderPosts();

        // 폼 초기화
        postTitle.value = '';
        postContent.value = '';
    });

    // 페이지 로드 시 포스트 데이터를 불러와서 렌더링
    loadPosts();
});

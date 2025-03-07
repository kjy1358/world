/* 기본 스타일 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
}

.container {
    width: 80%;
    margin: 0 auto;
}

/* 헤더 */
header {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
}

header .logo {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
}

header nav ul {
    list-style-type: none;
    text-align: center;
}

header nav ul li {
    display: inline;
    margin: 0 15px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
}

header nav ul li a:hover {
    text-decoration: underline;
}

/* 메인 콘텐츠 */
main {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
}

/* 블로그 글 */
.blog-posts {
    flex: 3;
}

.post {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.post h2 {
    font-size: 1.8rem;
    color: #333;
}

.post .date {
    color: #888;
    font-size: 0.9rem;
}

.post p {
    color: #555;
    font-size: 1rem;
    margin-top: 10px;
}

.post a {
    color: #007BFF;
    text-decoration: none;
}

.post a:hover {
    text-decoration: underline;
}

/* 더 읽기 버튼 */
.post button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.post button:hover {
    background-color: #0056b3;
}

/* 사이드바 */
.sidebar {
    flex: 1;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.sidebar h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.sidebar ul {
    list-style-type: none;
}

.sidebar ul li {
    margin-bottom: 10px;
}

.sidebar ul li a {
    color: #007BFF;
    text-decoration: none;
}

.sidebar ul li a:hover {
    text-decoration: underline;
}

/* 푸터 */
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    margin-top: 40px;
}

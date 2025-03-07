// toggleContent 함수는 버튼 클릭 시 글의 전체 내용을 보여주거나 숨깁니다.
function toggleContent(postId) {
    const fullContent = document.querySelector(`#${postId} .full-content`);
    
    // 현재 내용이 숨겨져 있다면 표시하고, 표시되어 있다면 숨깁니다.
    if (fullContent.style.display === "none") {
        fullContent.style.display = "block";
    } else {
        fullContent.style.display = "none";
    }
}

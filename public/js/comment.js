document.getElementById('comment-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const commentText = document.getElementById('comment-text').value.trim();
    const postId = window.location.pathname.split('/').pop();

    if (commentText) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_text: commentText, post_id: postId }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add comment.');
        }
    }
});
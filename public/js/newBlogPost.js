const newBlogPostFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        } 
        } else {
            console.error('Validation Error: All fields are required.');
        }

}

document
    .querySelector('#blog-post-form')
    .addEventListener('submit', newBlogPostFormHandler);
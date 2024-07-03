const signupFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the signup form
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    if (username && email && password) {
        try {
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    email,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
                // Handle non-200 responses
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            // Handle errors
            console.error('Error:', error);
        }
    }
}

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
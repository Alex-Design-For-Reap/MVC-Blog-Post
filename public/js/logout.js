const logout = async () => {
    // Send a POST request to destroy the session on the back end
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    sessionStorage.removeItem('user')
    
    if (response.ok) {
        // If successfully logged out, redirect to the homepage
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#logout').addEventListener('click', logout);
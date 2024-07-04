// public/js/idleTimeout.js
let idleTime = 0;
const maxIdleTime = 15 * 60 * 1000; // 1 minute

function resetIdleTimer() {
    idleTime = 0;
}

async function checkIdleTime() {
    idleTime += 1000;
    if (idleTime >= maxIdleTime) {
        try {
            const response = await fetch('/api/users/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });
            
            if (response.ok) {
                alert('You have been logged out due to inactivity.');
                document.location.reload();
            } else {
                alert('Failed to log out. Please try again.');
            }
        } catch (error) {
            console.error('Error during logout:', error);
            alert('An error occurred. Please try again.');
        }
    }
}

// Event listeners to reset the idle timer
window.onload = resetIdleTimer;
window.onmousemove = resetIdleTimer;
window.onmousedown = resetIdleTimer; // catches touchscreen presses
window.onclick = resetIdleTimer; // catches touchpad clicks
window.onscroll = resetIdleTimer; // catches scrolling with arrow keys
window.onkeypress = resetIdleTimer;

// Check idle time every second
setInterval(checkIdleTime, 1000);

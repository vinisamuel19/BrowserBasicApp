// ... Handles the authentication modal and close button logic.
// - Shows modal on close button click.
// - Validates credentials and closes app if correct.
// - Handles modal dismissal on background click.

const closeBtn = document.getElementById('close-btn');
const authModal = document.getElementById('auth-modal');
const authBox = document.getElementById('auth-box');
const authError = document.getElementById('auth-error');

// Show authentication modal and reset fields.
closeBtn.addEventListener('click', () => {
    authModal.classList.add('active');
    authError.textContent = '';
    document.getElementById('user').value = '';
    document.getElementById('pass').value = '';
    setTimeout(() => document.getElementById('user').focus(), 100);
});

// Handle authentication form submission.
authBox.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    if (user === 'admin' && pass === 'admin') {
        // Calls secure Electron preload API to close the app
        window.closeApp && window.closeApp();
    } else {
        authError.textContent = 'Invalid credentials';
    }
});

// Dismiss modal when clicking outside the form.
authModal.addEventListener('click', (e) => {
    if (e.target === authModal) authModal.classList.remove('active');
});

function login(user, pass) {
    return user === 'admin' && pass === '123';
}

// Xử lý form khi chạy trên trình duyệt
if (typeof document !== 'undefined') {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('message');

        if (login(username, password)) {
            message.textContent = 'Login successful!';
        } else {
            message.textContent = 'Invalid username or password!';
        }
    });
}

// Export hàm để Jest có thể kiểm thử
if (typeof module !== 'undefined') {
    module.exports = login;
}

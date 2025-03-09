document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const reviewForm = document.getElementById('reviewForm');
    const reviewList = document.getElementById('reviewList');

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const reviewText = document.getElementById('reviewText').value;
        const reviewRating = document.getElementById('reviewRating').value;
        const reviewItem = document.createElement('div');
        reviewItem.textContent = `Rating: ${reviewRating}, Review: ${reviewText}`;
        reviewList.appendChild(reviewItem);
        reviewForm.reset();
    });

    // Login and Signup Modals
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const closeButtons = document.querySelectorAll('.close');

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    signupBtn.addEventListener('click', () => {
        signupModal.style.display = 'block';
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginModal || event.target === signupModal) {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        }
    });

    // Simulate User Authentication
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        alert('Signup successful! Please login.');
        signupModal.style.display = 'none';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');
        if (email === storedEmail && password === storedPassword) {
            alert('Login successful!');
            loginModal.style.display = 'none';
        } else {
            alert('Invalid email or password.');
        }
    });
});

// Example: Add a click event to the search button
document.getElementById('search-button').addEventListener('click', function() {
    const location = document.getElementById('search').value;
    alert(`Searching for gas stations near ${location}...`);
});

// Example: Toggle dark mode (optional)
document.body.classList.toggle('dark-mode');

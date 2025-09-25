const toggleBtn = document.getElementById('modeToggle');
let darkModeEnabled = false; // Light mode is default

toggleBtn.addEventListener('click', () => {
    if (!darkModeEnabled) {
        // Enable dark mode
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/css/darkmode.css';
        link.id = 'darkModeCSS';
        document.head.appendChild(link);

        toggleBtn.textContent = "Light Mode";
        darkModeEnabled = true;
    } else {
        // Switch back to light mode
        const link = document.getElementById('darkModeCSS');
        if (link) link.remove();

        toggleBtn.textContent = "Dark Mode";
        darkModeEnabled = false;
    }
});

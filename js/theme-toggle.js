document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-theme') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
        }
    }

    themeToggleButton.addEventListener('click', function () {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
        } else {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
        }
    });
});

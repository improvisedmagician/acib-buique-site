// Shared functionality for ACIB Portal

/**
 * Toggles dark mode on the HTML element and saves the preference.
 */
function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
}

/**
 * Applies dark mode based on saved preference or system settings on initial load.
 */
function applyInitialDarkMode() {
    const isDarkModeSaved = localStorage.getItem('darkMode') === 'true';
    const prefersDarkScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDarkModeSaved || (!localStorage.getItem('darkMode') && prefersDarkScheme)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// Apply dark mode immediately when the script loads
applyInitialDarkMode();


// Smooth scrolling for anchor links (Optional, but kept from original)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Note: Removed Bootstrap tooltip initialization as Bootstrap JS isn't included.
    // If you add Bootstrap JS, you can re-add that part here.
});
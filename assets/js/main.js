// main.js

document.addEventListener("DOMContentLoaded", async () => {
    // Load components sequentially to ensure DOM order if needed, or parallel
    try {
        await Promise.all([
            loadComponent("navbar-placeholder", "components/navbar.html"),
            loadComponent("footer-placeholder", "components/footer.html")
        ]);

        // Initialize UI logic after components are loaded
        initThemeToggle();
        initMobileMenu();
        
        // Highlight active link
        highlightActiveLink();

    } catch (error) {
        console.error("Error loading components:", error);
    }
});

async function loadComponent(elementId, filePath) {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to load ${filePath}`);
        const html = await response.text();
        element.outerHTML = html; // Replace the placeholder with the actual content
    } catch (error) {
        console.error(error);
    }
}

function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    if (!themeToggleBtn) return;

    // Set initial icon state based on current class
    if (document.documentElement.classList.contains('dark')) {
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
    } else {
        themeToggleLightIcon.classList.add('hidden');
        themeToggleDarkIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', function() {
        // Toggle icons
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // Toggle class and storage
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    });
}


function initMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-menu");

    if (!toggle || !menu) {
        console.error("Menu toggle or nav menu not found");
        // Retry if elements not ready (navbar loads dynamically)
        setTimeout(initMobileMenu, 100);
        return;
    }

    toggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        });
}

function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const page = currentPath.split("/").pop() || "index.html";
    
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('text-black', 'dark:text-white', 'font-medium');
            link.classList.remove('text-gray-600', 'dark:text-gray-300');
        }
    });
}

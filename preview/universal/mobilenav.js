const primaryNav = document.querySelector('.mobile-header-bar');
const navToggle = document.querySelector('.menu-button');
const menuButton = document.getElementById('mobile-menu-button');
const bottomNav = document.querySelector('.bottom-bar');

// data visble attribute hooks into HMTL for JS
navToggle.addEventListener('click', () => {
    var visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        bottomNav.setAttribute("data-visible", false);
        
        navToggle.textContent = "close";
        menuButton.style.textDecoration = "underline";
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        bottomNav.setAttribute("data-visible", true);

        navToggle.textContent = "menu";
        menuButton.style.textDecoration = "none";
        navToggle.setAttribute("aria-expanded", false);
    }
});


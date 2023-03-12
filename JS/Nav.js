document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active"); // Toggle hamburger icon
        navMenu.classList.toggle("active"); // Toggle nav menu
    });
});

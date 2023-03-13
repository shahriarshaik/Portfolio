document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu1 = document.querySelector(".nav-menu1");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active"); // Toggle hamburger icon
        navMenu1.classList.toggle("active"); // Toggle nav menu
        navMenu.classList.toggle("active"); // Toggle nav menu
    });
});

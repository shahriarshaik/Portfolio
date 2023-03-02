document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');

    console.log(navbarToggle);

    navbarToggle.addEventListener('click', () => {
        navbarToggle.classList.toggle('open');
    });

});

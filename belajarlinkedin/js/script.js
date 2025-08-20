// Toggle class
const navbarLinks = document.querySelector('.navbar-links');
document.querySelector('#menu').onclick = () => {
    navbarLinks.classList.toggle('active');
};

const menu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !navbarLinks.contains(e.target)) {
        navbarLinks.classList.remove('active');
        
    }
});
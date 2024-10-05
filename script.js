
const menuIcon= document.querySelector('#menu-icon');
const navLinks= document.querySelector('.nav-links');

menuIcon.onclick= () => {
    navLinks.classList.toggle('active')
}
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
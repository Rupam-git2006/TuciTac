const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');  

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
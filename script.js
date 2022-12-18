// jshint esversion:6
const  hamburgerEl = document.getElementById("hamburger");
const navMenuEl = document.getElementById("nav-menu");

hamburgerEl.addEventListener("click", () => {
    hamburgerEl.classList.toggle("active");
    navMenuEl.classList.toggle("active");
});

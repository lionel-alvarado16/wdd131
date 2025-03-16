// footer
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// data object
const today = new Date();
currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;

// Hamburger menu
const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
// footer
const currentyear = document.querySelector("#currentyear");
// const currentyearMobile = document.querySelector("#currentyear-mobile");

// data object
const today = new Date();

function updateFooterContent() {
    if (window.matchMedia("(min-width: 37.5em)").matches) {
        currentyear.innerHTML = `Visit Cusco &copy; ${today.getFullYear()} - Lionel Alvarado`;
    } else {
        currentyear.innerHTML = `Visit Cusco &copy; ${today.getFullYear()}<br><span class="center-text">Lionel Alvarado</span>`;
    }
}

updateFooterContent();

window.addEventListener("resize", updateFooterContent);

// Hamburger menu
const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


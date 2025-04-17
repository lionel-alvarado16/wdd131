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


const formSubmission = document.querySelector(".submit");

let numSubmissions = Number(window.localStorage.getItem("numSubmissions-ls")) || 1;

if (numSubmissions != 0) {
    formSubmission.textContent = numSubmissions;
} else {
    formSubmission.textContent = 0;
}

numSubmissions++;

localStorage.setItem("numSubmissions-ls", numSubmissions);
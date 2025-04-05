const formSubmission = document.querySelector(".submit");

let numSubmissions = Number(window.localStorage.getItem("numSubmissions-ls")) || 1;

if (numSubmissions != 0) {
    formSubmission.textContent = numSubmissions;
} else {
    formSubmission.textContent = 0;
}

numSubmissions++;

localStorage.setItem("numSubmissions-ls", numSubmissions);
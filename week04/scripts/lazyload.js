const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// data object
const today = new Date();
currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;
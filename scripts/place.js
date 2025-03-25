// footer
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// data object
const today = new Date();
currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;

// Windchill factor function

const temperature = document.querySelector("#temperature");
const windSpeed = document.querySelector("#wind");
const windChill = document.querySelector("#wind-chill");

let temp = 23;
let wind = 10;

temperature.innerHTML = temp;
windSpeed.innerHTML = wind;
if (temp <= 10 && wind > 4.8) {
    windChill.innerHTML = `${calculateWindChill(temp, wind)} °C`;
} else {
    windChill.innerHTML = "N/A";
}

function calculateWindChill(temperature, windSpeed) {
    const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(1);
}
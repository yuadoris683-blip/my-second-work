const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");

const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const weatherIcon = document.querySelector("#weatherIcon");

const API_KEY = "YOUR_API_KEY";


async function getWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    try {

        const url =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        console.log(data);

        // Display city and country
        cityName.innerHTML =
            `${data.name} <span>${data.sys.country}</span>`;

        // Display temperature
        temperature.textContent =
            `${Math.round(data.main.temp)}°C`;

        // Display weather description
        description.textContent =
            data.weather[0].description;

        // Display weather icon from API
        const iconCode = data.weather[0].icon;

        weatherIcon.src =
            `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    } catch (error) {

        alert(error.message);
        console.log(error);
    }
}


// When the Search button is clicked
searchBtn.addEventListener("click", getWeather);


// Allow the Enter key to search
cityInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        getWeather();
    }

});
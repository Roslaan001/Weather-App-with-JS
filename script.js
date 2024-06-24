const apiKey ="e4ef7538d894b0da992fb8c53002c0a6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

searchButton.addEventListener("click", () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather (location);
    }
});


function fetchWeather(location) {
    const url = `${apiUrl}?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`;


    fetch(url)
        .then((response) => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error("City not found");
                } else {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            }
             return response.json()
        })
        .then ((data) => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })

    .catch((error) => {
        console.error ("Error fetching the weather data:", error);
        locationElement.textContent = "Wrong city";
        temperatureElement.textContent = "";
        descriptionElement.textContent = "";
    })

}

// const apiKey = "e4ef7538d894b0da992fb8c53002c0a6";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

// const locationInput = document.getElementById("locationInput");
// const searchButton = document.getElementById("searchButton");
// const locationElement = document.getElementById("location");
// const temperatureElement = document.getElementById("temperature");
// const descriptionElement = document.getElementById("description");

// searchButton.addEventListener("click", () => {
//     const location = locationInput.value;
//     if (location) {
//         fetchWeather(location);
//     }
// });

// function fetchWeather(location) {
//     const url = `${apiUrl}?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`;

//     fetch(url)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             locationElement.textContent = data.name;
//             temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
//             descriptionElement.textContent = data.weather[0].description;
//         })
//         .catch((error) => {
//             console.error("Error fetching the weather data:", error);
//             locationElement.textContent = "Error fetching the weather data.";
//             temperatureElement.textContent = "";
//             descriptionElement.textContent = "";
//         });
// }

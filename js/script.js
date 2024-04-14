document.getElementById("weather-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var city = document.getElementById("city").value;
    var apiKey = "659763ced586284e4ab8643557f9de79"; // Replace this with your API key
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        var weatherInfo = document.getElementById("weather-info");
        weatherInfo.innerHTML = "";
        var cityName = document.createElement("h2");
        cityName.textContent = data.name + ", " + data.sys.country;
        var temperature = document.createElement("p");
        temperature.textContent = "Temperature: " + data.main.temp + "°C";
        var description = document.createElement("p");
        description.textContent = "Description: " + data.weather[0].description;
        weatherInfo.appendChild(cityName);
        weatherInfo.appendChild(temperature);
        weatherInfo.appendChild(description);
    })
    .catch(error => {
        console.log("Error fetching weather data:", error);
        var weatherInfo = document.getElementById("weather-info");
        weatherInfo.innerHTML = "Error fetching weather data. Check spelling & please try again.";
    });
});

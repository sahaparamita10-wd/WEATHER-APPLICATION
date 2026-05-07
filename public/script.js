async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (!city) return alert("Enter a city name");

    try {
        const response = await fetch(`/weather?city=${city}`);
        const data = await response.json();

        if (data.error) {
            document.getElementById("weatherResult").innerHTML = `<p>${data.error}</p>`;
            return;
        }

        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}</h2>
            <p>Temp: ${data.main.temp} °C</p>
            <p>Condition: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        console.error(error);
    }
}
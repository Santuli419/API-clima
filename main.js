const apiKey = '3338ab308d654d43983192743242309'; // Reemplaza con tu clave API

async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert("Por favor, ingresa una ciudad.");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=es`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Ciudad no encontrada");
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const resultDiv = document.getElementById('result');
    const iconUrl = `https:${data.current.condition.icon}`; // Agregamos "https:" para tener la URL completa
    resultDiv.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <img src="${iconUrl}" alt="${data.current.condition.text}"> <!-- Añade la imagen del ícono -->
        <p>Temperatura: ${data.current.temp_c}°C</p>
        <p>Clima: ${data.current.condition.text}</p>
        <p>Humedad: ${data.current.humidity}%</p>
        <p>Viento: ${data.current.wind_kph} km/h</p>
    `;
}


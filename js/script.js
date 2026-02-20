const cityInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-button');

const weatherInfoSection = document.querySelector('.weather-info');
const notFoundSection = document.querySelector('.not-found');
const searchCitySection = document.querySelector('.search-city');

const countryTxt = document.querySelector('.country-txt');
const tempTxt = document.querySelector('.temp-txt');
const conditionText = document.querySelector('.condition-text');
const humidityValueTxt = document.querySelector('.humidity-value-txt');
const windValueTxt = document.querySelector('.wind-value-txt');
const weatherSummaryImg = document.querySelector('.weather-summary-img');
const currentDateTxt = document.querySelector('.current-date-txt');

const forecastItemsContainer = document.querySelector('.forecast-items-container');

const apiKey = "0ecdb8ecea454b1f8b995528261902";

/* ================= EVENTS ================= */

searchBtn.addEventListener('click', () => {
    if (cityInput.value.trim()) {
        updateWeatherInfo(cityInput.value.trim());
        cityInput.value = '';
        cityInput.blur();
    }
});

cityInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && cityInput.value.trim()) {
        updateWeatherInfo(cityInput.value.trim());
        cityInput.value = '';
        cityInput.blur();
    }
});

/* ================= API ================= */

async function getFetchData(endpoint, city) {
    const apiUrl = `https://api.weatherapi.com/v1/${endpoint}.json?key=${apiKey}&q=${city}&days=7&aqi=yes`;
    const response = await fetch(apiUrl);
    return response.json();
}

/* ================= HELPERS ================= */

function getWeatherIconByText(text) {
    const condition = text.toLowerCase();

    if (condition.includes('rain')) return 'rain.svg';
    if (condition.includes('cloud')) return 'clouds.svg';
    if (condition.includes('clear')) return 'clear.svg';
    if (condition.includes('snow')) return 'snow.svg';
    if (condition.includes('thunder')) return 'thunderstorm.svg';
    return 'atmosphere.svg';
}

function getCurrentDate() {
    return new Date().toLocaleDateString('en-GB', {
        weekday: 'short',
        day: '2-digit',
        month: 'short'
    });
}

function getDayName(date) {
    return new Date(date).toLocaleDateString('en-GB', {
        weekday: 'short'
    });
}

/* ================= MAIN ================= */

async function updateWeatherInfo(city) {
    const weatherData = await getFetchData('current', city);

    if (weatherData.error) {
        showDisplaySection(notFoundSection);
        return;
    }

    // SAVE CITY
    localStorage.setItem('lastCity', city);

    const {
        location: { name, country },
        current: {
            temp_c,
            humidity,
            wind_kph,
            condition: { text }
        }
    } = weatherData;

    countryTxt.textContent = `${name}, ${country}`;
    tempTxt.textContent = Math.round(temp_c) + '°C';
    conditionText.textContent = text;
    humidityValueTxt.textContent = humidity + '%';
    windValueTxt.textContent = wind_kph + ' km/h';

    currentDateTxt.textContent = getCurrentDate();
    weatherSummaryImg.src = `img/${getWeatherIconByText(text)}`;

    await updateForecastsInfo(city);
    showDisplaySection(weatherInfoSection);
}

/* ================= FORECAST ================= */

async function updateForecastsInfo(city) {
    const forecastsData = await getFetchData('forecast', city);

    // CLEAR OLD DAYS
    forecastItemsContainer.innerHTML = '';

    forecastsData.forecast.forecastday.forEach((day, index) => {
        if (index === 0) return; // skip today
        updateForecastItems(day);
    });
}

function updateForecastItems(weatherData) {
    const {
        date,
        day: {
            avgtemp_c,
            condition: { text }
        }
    } = weatherData;

    const dayName = getDayName(date);
    const dateText = new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short'
    });

    const forecastItem = `
        <div class="forecast-item">
            <h5 class="forecast-day">${dayName}</h5>
            <h5 class="forecast-date">${dateText}</h5>
            <img src="img/${getWeatherIconByText(text)}" class="forecast-item-img">
            <h5 class="forecast-item-temp">${Math.round(avgtemp_c)}°C</h5>
        </div>
    `;

    forecastItemsContainer.insertAdjacentHTML('beforeend', forecastItem);
}

/* ================= UI ================= */

function showDisplaySection(section) {
    [weatherInfoSection, searchCitySection, notFoundSection]
        .forEach(sec => sec.style.display = 'none');

    section.style.display = 'flex';
}

/* ================= LOAD SAVED CITY ================= */

window.addEventListener('load', () => {
    const savedCity = localStorage.getItem('lastCity');
    if (savedCity) {
        updateWeatherInfo(savedCity);
    }
});
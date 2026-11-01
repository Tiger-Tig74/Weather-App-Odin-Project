import './styles.css';
import {
    fetchWeather,
    processWeatherData,
    getWeatherTheme,
} from './api/weather.js';
import {
    showLoading,
    showError,
    hideAll,
    renderWeather,
    applyTheme,
    setActiveUnitButton,
} from './ui/render.js';

let currentData = null;
let currentUnit = 'celsius';

const form = document.getElementById('search-form');
const input = document.getElementById('city-input');
const unitButtons = document.querySelectorAll('.unit-btn');

async function handleSearch(city) {
    showLoading();
    try {
        const raw = await fetchWeather(city);
        currentData = processWeatherData(raw, city.trim());
        applyTheme(getWeatherTheme(currentData.description));
        renderWeather(currentData, currentUnit);
    } catch (err) {
        showError(err.message || 'Something went wrong. Please try again.');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = input.value.trim();
    if (city) handleSearch(city);
});

unitButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const unit = btn.dataset.unit;
        if (unit === currentUnit) return;

        currentUnit = unit;
        setActiveUnitButton(unit);

        if (currentData) {
            renderWeather(currentData, currentUnit);
        }
    });
});

setActiveUnitButton(currentUnit);
applyTheme('theme-default');
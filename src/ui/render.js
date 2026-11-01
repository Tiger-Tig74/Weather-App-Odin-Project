import { celsiusToFahrenheit } from "../api/weather.js";

const els = {
    form: document.getElementById("search-form"),
    input: document.getElementById("city-input"),
    loading: document.getElementById("loading"),
    error: document.getElementById("error"),
    display: document.getElementById("weather-display"),
    empty: document.getElementById("empty-state"),
    unitButtons: document.querySelectorAll(".unit-btn"),
    body: document.body,
};

export function showLoading() {
    els.loading.classList.remove("hidden");
    els.error.classList.add("hidden");
    els.display.classList.add("hidden");
    els.empty.classList.add("hidden");
}

export function showError(message) {
    els.loading.classList.add("hidden");
    els.display.classList.add("hidden");
    els.empty.classList.add("hidden");
    els.error.textContent = message;
    els.error.classList.remove("hidden");
}

export function hideAll() {
    els.loading.classList.add("hidden");
    els.error.classList.add("hidden");
    els.display.classList.add("hidden");
    els.empty.classList.add("hidden");
}

export function setActiveUnitButton(unit) {
    els.unitButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.unit === unit);
    });
}

export function applyTheme(themeClass) {
    els.body.className = "";
    els.body.classList.add(themeClass);
}

export function renderWeather(data, unit) {
    hideAll();
    els.display.classList.remove("hidden");

    const isF = unit === "fahrenheit";

    const fmtTemp = (c) => {
        if (c === null) return "—";
        return isF ? `${celsiusToFahrenheit(c)}°F` : `${c}°C`;
    };

    const fmtWind = (kmh) => (kmh === null ? "—" : `${kmh} km/h`);

    els.display.innerHTML = `
    <section class="current">
        <h2>${data.city}</h2>
        <p class="description">${data.description}</p>
        <div class="current-stats">
            <div class="stat">
                <span class="stat-label">Temperature</span>
                <span class="stat-value">${fmtTemp(data.temperatureC)}</span>
            </div>
            <div class="stat">
                <span class="stat-label">Wind</span>
                <span class="stat-value">${fmtWind(data.windKmh)}</span>
            </div>
        </div>
    </section>

    <section class="forecast">
        <h3>3-Day Forecast</h3>
        <div class="forecast-grid">
        ${data.forecast
            .map(
                (day) => `
                    <div class="forecast-card">
                        <span class="forecast-day">${day.day}</span>
                        <span class="forecast-temp">${fmtTemp(day.temperatureC)}</span>
                        <span class="forecast-wind">${fmtWind(day.windKmh)}</span>
                    </div>
                `,
            )
            .join("")}
        </div>
    </section>
    `;
}

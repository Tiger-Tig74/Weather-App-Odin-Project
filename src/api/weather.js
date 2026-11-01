const BASE_URL = 'https://goweather.xyz/v2/weather';

function parseTemperature(str) {
    if (!str) return { value: null, unit: 'C' };
    const match = str.match(/(-?\d+(?:\.\d+)?)\s*°?\s*([CF])/i);
    if (!match) return { value: null, unit: 'C' };
    return { value: parseFloat(match[1]), unit: match[2].toUpperCase() };
}

function parseWind(str) {
    if (!str) return null;
    const match = str.match(/(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : null;
}

export function celsiusToFahrenheit(c) {
    return c === null ? null : Math.round((c * 9) / 5 + 32);
}

export async function fetchWeather(city) {
    const encoded = encodeURIComponent(city.trim());
    const response = await fetch(`${BASE_URL}/${encoded}`);

    if (!response.ok) {
        throw new Error(`Could not find weather for "${city}". Please check the city name.`);
    }

    const data = await response.json();

    if (!data || !data.temperature) {
        throw new Error(`No weather data found for "${city}".`);
    }

    return data;
}

export function processWeatherData(raw, cityName) {
    const currentTemp = parseTemperature(raw.temperature);

    const forecast = (raw.forecast || []).map((day) => {
        const temp = parseTemperature(day.temperature);
        return {
            day: day.day,
            temperatureC: temp.value,
            windKmh: parseWind(day.wind),
        };
    });

    return {
        city: cityName,
        description: (raw.description || '').trim() || 'Unknown',
        temperatureC: currentTemp.value,
        windKmh: parseWind(raw.wind),
        forecast,
        fetchedAt: new Date(),
    };
}

export function getWeatherTheme(description) {
    const d = description.toLowerCase();
    if (d.includes('clear') || d.includes('sunny')) return 'theme-sunny';
    if (d.includes('cloud') || d.includes('overcast')) return 'theme-cloudy';
    if (d.includes('rain') || d.includes('drizzle') || d.includes('shower')) return 'theme-rainy';
    if (d.includes('snow') || d.includes('sleet')) return 'theme-snowy';
    if (d.includes('thunder') || d.includes('storm')) return 'theme-stormy';
    if (d.includes('fog') || d.includes('mist') || d.includes('haze')) return 'theme-foggy';
    return 'theme-default';
}
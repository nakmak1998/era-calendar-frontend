const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const WEATHER_PARAMS = {
    q: 'Anapa,ru',
    appid: 'appid',
    lang: 'ru',
    units: 'metric',
};


const getUrl = (url, params) => {
    url = new URL(url);
    url.search = new URLSearchParams(params).toString();
    return url;
};


async function getWeather(weatherUrl = WEATHER_URL, params = WEATHER_PARAMS) {
    const url = getUrl(weatherUrl, params)
    let resposnse = await fetch(url);
    return await resposnse.json()
};

const getIconUrl = (id, size = '4x') => {
    return `http://openweathermap.org/img/wn/${id}@${size}.png`
};

async function getDataFromWeather() {
    const data = await getWeather()
    return {
        temperature: Math.round(data.main.temp),
        icon: getIconUrl(data.weather[0].icon),
    };
};
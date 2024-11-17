function processRequest(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processRequest);
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: data.main.temp };
  result.type = getWeatherType(result.temp.F);
  result.condition = mapWeatherCondition(data.weather[0].main.toLowerCase());
  result.isDay = isDay(data.sys, Date.now());
  return result;
};

const mapWeatherCondition = (condition) => {
  const conditionMap = {
    clear: "clear",
    clouds: "clouds",
    rain: "rain",
    fog: "fog",
    snow: "snow",
    thunderstorm: "thunderstorm",
    drizzle: "rain",
    mist: "fog",
    haze: "fog",
    smoke: "fog",
    dust: "fog",
    sand: "fog",
    ash: "fog",
    squall: "thunderstorm",
    tornado: "thunderstorm",
  };
  return conditionMap[condition] || "clear";
};

const isDay = ({ sunrise, sunset }, currentTime) => {
  return sunrise * 1000 < currentTime && currentTime < sunset * 1000;
};

const getWeatherType = (temperature) => {
  if (temperature > 86) {
    return "hot";
  } else if (temperature >= 62 && temperature < 86) {
    return "warm";
  } else {
    return "cold";
  }
};

import { processResponse } from "./api";

export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processResponse);
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  // console.log(result);
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
  // console.log(temperature);
  if (temperature > 74) {
    return "hot";
  } else if (temperature >= 60 && temperature < 74) {
    return "warm";
  } else {
    return "cold";
  }
};

// weather.temperature.F = data.main.temp;
// weather.temperature.C = Math.round((data.main.temp - 32) * 5/9);

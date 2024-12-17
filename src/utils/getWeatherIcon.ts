import { WeatherCode } from '../services';

export const getWeatherIcon = (code: WeatherCode) => {
  switch (code) {
    case WeatherCode.PARTLY_CLOUDY:
      return 'weather-partly-cloudy';
    case WeatherCode.CLOUDY:
      return 'weather-cloudy';
    case WeatherCode.RAIN_SHOWERS:
      return 'weather-pouring';
    default:
      return 'weather-sunny';
  }
};

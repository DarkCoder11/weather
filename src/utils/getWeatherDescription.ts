import { WeatherCode } from '../services';

export const getWeatherDescription = (code: WeatherCode): string => {
  switch (code) {
    case WeatherCode.PARTLY_CLOUDY:
      return 'Partly Cloudy';
    case WeatherCode.CLOUDY:
      return 'Cloudy';
    case WeatherCode.RAIN_SHOWERS:
      return 'Rain Showers';
    default:
      return 'Clear';
  }
};

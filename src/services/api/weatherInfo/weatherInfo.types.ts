export enum WeatherCode {
  CLEAR = 0,
  CLOUDY = 3,
  RAIN_SHOWERS = 61,
  PARTLY_CLOUDY = 2,
}

type TCurrentWeather = {
  time: string;
  is_day: number;
  interval: number;
  windspeed: number;
  temperature: number;
  winddirection: number;
  weathercode: WeatherCode;
};

type TCurrentWeatherUnits = {
  time: string;
  is_day: string;
  interval: string;
  windspeed: string;
  weathercode: string;
  temperature: string;
  winddirection: string;
};

export type TGetWeatherDataByCoordsResponse = {
  elevation: number;
  latitude: number;
  timezone: string;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone_abbreviation: string;
  current_weather: TCurrentWeather;
  current_weather_units: TCurrentWeatherUnits;
};

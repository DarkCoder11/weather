import { meteoClient } from '../meteoClient';

import { TGetWeatherDataByCoordsResponse } from './weatherInfo.types';

const getWeatherDataByCoordinates = async (
  latitude: number,
  longitude: number,
): Promise<TGetWeatherDataByCoordsResponse> => {
  try {
    const response = await meteoClient.get('/forecast', {
      params: {
        latitude,
        longitude,
        current_weather: true,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};

export const WeatherInfoService = {
  getWeatherDataByCoordinates,
};

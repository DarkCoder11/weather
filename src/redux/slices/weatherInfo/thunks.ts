import { createAsyncThunk } from '@reduxjs/toolkit';

import { CityInfoService, WeatherInfoService } from '../../../services';
import { Reducer } from '../../types';

import {
  TGetCityByNameArgs,
  TGetCityByNameReturn,
  TGetWeatherByCityArgs,
} from './types';

export const getCityByName = createAsyncThunk<
  TGetCityByNameReturn,
  TGetCityByNameArgs
>(`${Reducer.WEATHER_INFO}/getCityByName`, async ({ cityName }, thunkAPI) => {
  try {
    const cityData = await CityInfoService.getCityCoordinates(cityName);

    const weatherData = await WeatherInfoService.getWeatherDataByCoordinates(
      cityData.lat,
      cityData.lon,
    );

    return {
      cityData,
      weatherData,
    };
  } catch (error) {
    const typedError = error as Error;
    return thunkAPI.rejectWithValue({ error: typedError.message });
  }
});

export const getWeatherByCity = createAsyncThunk<
  TGetCityByNameReturn,
  TGetWeatherByCityArgs
>(
  `${Reducer.WEATHER_INFO}/getWeatherByCity`,
  async ({ latitude, longitude }, thunkAPI) => {
    try {
      const weatherData = await WeatherInfoService.getWeatherDataByCoordinates(
        latitude,
        longitude,
      );

      const cityData = await CityInfoService.getCityCoordinates(
        `${latitude},${longitude}`,
      );

      return {
        cityData,
        weatherData,
      };
    } catch (error) {
      const typedError = error as Error;
      return thunkAPI.rejectWithValue({ error: typedError.message });
    }
  },
);

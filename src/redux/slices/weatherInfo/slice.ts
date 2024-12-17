import { createSlice } from '@reduxjs/toolkit';

import { Reducer } from '../../types';

import * as weatherInfoThunks from './thunks';
import {
  GetCityInfoActionPayload,
  WeatherInfoSliceState,
  WeatherInfoStates,
} from './types';

const initialWeatherInfoState: WeatherInfoSliceState = {
  error: null,
  weather: null,
  cityInfo: null,
  loading: WeatherInfoStates.IDLE,
};

const weatherInfoSlice = createSlice({
  name: Reducer.WEATHER_INFO,
  initialState: initialWeatherInfoState,
  reducers: {
    reset: () => initialWeatherInfoState,
  },
  extraReducers: builder => {
    builder.addCase(weatherInfoThunks.getCityByName.pending, state => {
      state.loading = WeatherInfoStates.LOADING;
    });
    builder.addCase(
      weatherInfoThunks.getCityByName.fulfilled,
      (state, action: GetCityInfoActionPayload) => {
        state.error = null;
        state.cityInfo = action.payload.cityData;
        state.weather = action.payload.weatherData;
        state.loading = WeatherInfoStates.IDLE;
      },
    );
    builder.addCase(
      weatherInfoThunks.getCityByName.rejected,
      (state, action) => {
        state.loading = WeatherInfoStates.IDLE;
        state.error = action.error;
      },
    );

    builder.addCase(weatherInfoThunks.getWeatherByCity.pending, state => {
      state.loading = WeatherInfoStates.LOADING;
    });
    builder.addCase(
      weatherInfoThunks.getWeatherByCity.fulfilled,
      (state, action: GetCityInfoActionPayload) => {
        state.error = null;
        state.cityInfo = action.payload.cityData;
        state.weather = action.payload.weatherData;
        state.loading = WeatherInfoStates.IDLE;
      },
    );
    builder.addCase(
      weatherInfoThunks.getWeatherByCity.rejected,
      (state, action) => {
        state.loading = WeatherInfoStates.IDLE;
        state.error = action.error;
      },
    );
  },
});

export default weatherInfoSlice;

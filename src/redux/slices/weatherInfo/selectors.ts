import { createSelector } from '@reduxjs/toolkit';

import { AppStore } from '../../types';
import { WeatherInfoStates } from './types';

const selectWeatherInfoState = (state: AppStore) => state.weatherInfo;

export const selectWeatherInfoLoading = createSelector(
  selectWeatherInfoState,
  weatherInfoState => weatherInfoState.loading === WeatherInfoStates.LOADING,
);

export const selectWeatherInfoError = createSelector(
  selectWeatherInfoState,
  weatherInfoState => weatherInfoState.error,
);

export const selectCityInfo = createSelector(
  selectWeatherInfoState,
  weatherInfoState => weatherInfoState.cityInfo,
);

export const selectWeatherInfo = createSelector(
  selectWeatherInfoState,
  weatherInfoState => weatherInfoState.weather,
);

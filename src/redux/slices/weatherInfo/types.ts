import { PayloadAction, SerializedError } from '@reduxjs/toolkit';

import {
  TGetCityCoordinatesResponse,
  TGetWeatherDataByCoordsResponse,
} from '../../../services';

export enum WeatherInfoStates {
  IDLE = 'idle',
  LOADING = 'loading',
}

export type WeatherInfoSliceState = {
  loading: WeatherInfoStates;
  error?: SerializedError | null;
  cityInfo: TGetCityCoordinatesResponse | null;
  weather: TGetWeatherDataByCoordsResponse | null;
};

// Actions
export type TGetCityByNameArgs = {
  cityName: string;
};
export type TGetWeatherByCityArgs = {
  latitude: number;
  longitude: number;
};
export type TGetCityByNameReturn = {
  cityData: TGetCityCoordinatesResponse;
  weatherData: TGetWeatherDataByCoordsResponse;
};

// Payloads
export type GetCityInfoActionPayload = PayloadAction<TGetCityByNameReturn>;

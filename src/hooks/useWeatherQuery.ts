import * as Location from 'expo-location';

import {
  weatherInfoActions,
  weatherInfoSelectors,
} from '../redux/slices/weatherInfo';

import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

export const useWeatherQuery = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(
    weatherInfoSelectors.selectWeatherInfoLoading,
  );
  const cityInfo = useAppSelector(weatherInfoSelectors.selectCityInfo);
  const weather = useAppSelector(weatherInfoSelectors.selectWeatherInfo);
  const error = useAppSelector(weatherInfoSelectors.selectWeatherInfoError);

  const fetchWeatherByCityName = async (cityName: string) => {
    await dispatch(weatherInfoActions.getCityByName({ cityName }));
  };

  const fetchWeatherByCurrentLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      return;
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});

    await dispatch(
      weatherInfoActions.getWeatherByCity({
        latitude,
        longitude,
      }),
    );
  };

  return {
    error,
    weather,
    cityInfo,
    isLoading,
    fetchWeatherByCityName,
    fetchWeatherByCurrentLocation,
  };
};

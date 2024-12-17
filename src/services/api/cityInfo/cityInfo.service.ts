import { nominatimClient } from '../nominatimClient';

import { TGetCityCoordinatesResponse } from './cityInfo.types';

const getCityCoordinates = async (
  city: string,
): Promise<TGetCityCoordinatesResponse> => {
  try {
    const { data } = await nominatimClient.get('/search', {
      params: {
        q: city,
      },
    });
    const searchResult = data[0];

    if (!searchResult) {
      throw new Error('Error fetching city by name');
    }

    return {
      lat: parseFloat(searchResult.lat),
      lon: parseFloat(searchResult.lon),
      displayName: searchResult.display_name,
    };
  } catch (error) {
    throw new Error('Error fetching city by name');
  }
};

export const CityInfoService = {
  getCityCoordinates,
};

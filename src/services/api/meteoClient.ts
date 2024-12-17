import axios from 'axios';

export const meteoClient = axios.create({
  baseURL: 'https://api.open-meteo.com/v1',
});

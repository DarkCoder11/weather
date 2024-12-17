import { store } from './store';

export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof store.getState>;

export enum Reducer {
  WEATHER_INFO = 'weatherInfo',
}

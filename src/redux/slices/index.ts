import { combineReducers } from '@reduxjs/toolkit';

import weatherInfo from './weatherInfo';

const slices = combineReducers({
  weatherInfo,
});

export default slices;

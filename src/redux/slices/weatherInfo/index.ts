import weatherInfoSlice from './slice';
import * as weatherInfoThunks from './thunks';
import * as weatherInfoSelector from './selectors';

export const weatherInfoActions = {
  ...weatherInfoThunks,
  ...weatherInfoSlice.actions,
};

export const weatherInfoSelectors = {
  ...weatherInfoSelector,
};

export default weatherInfoSlice.reducer;

import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { AppStore } from '../redux';

export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector;

import { configureStore } from '@reduxjs/toolkit';

import settingsReducer from './reducers/settingsReducer';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
  preloadedState: {
    settings: {
      players: 6,
      spies: 2,
      addedPlaces: []
    },
    devTools: false,
  }
});

export default store;

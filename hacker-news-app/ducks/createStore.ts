import { Store, combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterSlice, { initialState as counterState } from './counter/slice';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
})

const preloadedState = () => {
  return { counter: counterSlice };
}

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const createStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  })
}

export default createStore;
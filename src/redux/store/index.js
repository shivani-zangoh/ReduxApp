// src/redux/store.js

import { combineReducers, applyMiddleware,  } from 'redux'; // Import applyMiddleware and createStore
import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import authReducer from '../reducer/authReducers';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here
});

// const middleware = [thunk, logger]; // Define your middleware array

const store = configureStore({
  reducer: rootReducer,
  // middleware: applyMiddleware(...middleware)// Apply middleware directly to createStore
});

export default store;

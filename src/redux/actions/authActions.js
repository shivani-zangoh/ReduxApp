// store/actions/authActions.js
import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      // Replace the API endpoint with your actual backend API
      const response = await axios.post('https://dummyjson.com/auth/login',{
        username: 'kminchelle',
        password: '0lelplR',
      } ,credentials);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: LOGIN_ERROR, payload: error.response.data.message });
    }
  };
};

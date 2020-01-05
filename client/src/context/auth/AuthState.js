import React, { useReducer } from 'react';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';
import AuthContext from './authContext';
import authReducer from './authReducer';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User

  // Register User

  // Login User

  // Logout

  // CLear errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

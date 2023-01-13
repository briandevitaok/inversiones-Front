import { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';

const init = () => {
  const email = JSON.parse(localStorage.getItem('email'));

  return {
    logged: !!email,
    email: email,
    
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispacht] = useReducer(authReducer, {}, init);

  const login = (email='') => {
    const action = {
      type: types.login,
      payload: email
    };

    localStorage.setItem('email', JSON.stringify(email));
    dispacht(action);
  };

  const logout = () => {
    localStorage.removeItem('email');
    const action = {
      type: types.logout,
    };
    dispacht(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';

const init = () => {
  const email = JSON.parse(localStorage.getItem('email'));
  const name = JSON.parse(localStorage.getItem('name'));
  return {
    logged: !!email,
    email: email,
    name: name,
    admin: false,
    
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispacht] = useReducer(authReducer, {}, init);
  
  const login = (email='', name='') => {
    const action = {
      type: types.login,
      payload: email, 
      payload: name
    };

    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('name', JSON.stringify(name));
    dispacht(action);
  };

  const logout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('name');
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

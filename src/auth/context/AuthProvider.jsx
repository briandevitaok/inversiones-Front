import { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const email = JSON.parse(localStorage.getItem('email'));

  return {
    logged: !!user,
    user: user,
    email: email,
    
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispacht] = useReducer(authReducer, {}, init);

  const login = (name = '', email='') => {
    const action = {
      type: types.login,
      payload: name,
      payload: email
    };

    localStorage.setItem('user', JSON.stringify(name));
    localStorage.setItem('email', JSON.stringify(email));
    dispacht(action);
  };

  const logout = () => {
    localStorage.removeItem('user');
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

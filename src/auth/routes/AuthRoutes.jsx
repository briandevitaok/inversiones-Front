import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPages } from '../pages';
import { RegisterPages } from '../pages/RegisterPages';

export const AuthRoutes = () => {
  return (
    <Routes>
      
      <Route path="login" element={<LoginPages />} />
      <Route path="register" element={<RegisterPages />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

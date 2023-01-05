import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPages } from '../pages';

export const AuthRoutes = () => {
  return (
    <Routes>
      
      <Route path="login" element={<LoginPages />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

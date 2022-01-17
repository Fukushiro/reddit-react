import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
export const urls = {
  home: '/',
  login: '/login',
  register: '/register',
};

export default function route() {
  return (
    <Routes>
      <Route path={urls.home} element={<Home />} />
      <Route path={urls.login} element={<Login />} />
      <Route path={urls.register} element={<Register />} />
    </Routes>
  );
}

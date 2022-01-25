import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Subreddit from '../pages/Subreddit';
export const urls = {
  home: '/',
  login: '/login',
  register: '/register',
  subreddit: '/subreddit/:subredditid',
};

export default function route() {
  return (
    <Routes>
      <Route path={urls.home} element={<Home />} />
      <Route path={urls.login} element={<Login />} />
      <Route path={urls.register} element={<Register />} />
      <Route path={urls.subreddit} element={<Subreddit />} />
    </Routes>
  );
}

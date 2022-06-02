import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePost from "../pages/CreatePost";
import CreateSubreddit from "../pages/CreateSubreddit";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Register from "../pages/Register";
import Subreddit from "../pages/Subreddit";
export const urls = {
  home: "/",
  login: "/login",
  register: "/register",
  subreddit: "/subreddit/:subredditid",
  createPost: "/subreddit/:subredditid/post/create",
  createSubreddit: "/subreddit/create",
  post: "/post/:postid",
};

export default function route() {
  return (
    <Routes>
      <Route path={urls.home} element={<Home />} />
      <Route path={urls.login} element={<Login />} />
      <Route path={urls.register} element={<Register />} />
      <Route path={urls.subreddit} element={<Subreddit />} />
      <Route path={urls.createPost} element={<CreatePost />} />
      <Route path={urls.createSubreddit} element={<CreateSubreddit />} />
      <Route path={urls.post} element={<Post />} />
    </Routes>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import TopicPage from "./pages/Topic";
import PostPage from "./pages/Posts";


const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/topics" element={<TopicPage />} />
        <Route path="/discussion" element={<PostPage/>}/>
      </Routes>
    </Router>
  );
};

export default Root;

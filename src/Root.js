import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import { SignIn } from "./pages/SignIn";
import TopicPage from "./pages/Topic";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/topics" element={<TopicPage />} />
      </Routes>
    </Router>
  );
};

export default Root;

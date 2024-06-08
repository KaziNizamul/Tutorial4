import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ProfileListing from "./components/ProfileListing";
import ProfileDetail from "./components/ProfileDetail";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profiles" element={<ProfileListing />} />
        <Route path="/profiles/:id" element={<ProfileDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

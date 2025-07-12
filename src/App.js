import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AskQuestion from "./pages/AskQuestion";
import QuestionDetails from "./pages/QuestionDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/questions/:id" element={<QuestionDetails />} />
      </Routes>
    </Router>
  );
}

export default App;



import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/ask">Ask Question</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/register">Register</Link> |{" "}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;

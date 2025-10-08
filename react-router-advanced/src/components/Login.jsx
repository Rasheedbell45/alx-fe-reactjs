import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/profile");
  };

  return (
    <div>
      <h2>Please Login to Access Profile</h2>
      <button
        onClick={handleLogin}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;

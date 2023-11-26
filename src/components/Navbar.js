import React from "react";
import "../App.css";

const Navbar = ({setToken}) => {
  const logOutHandler = () => {
    setToken("");
    localStorage.clear();
  };

  return (
    <div className="navbar">
      <h1>Welcome to the Fake-Store</h1>
      <button className="logout-btn" onClick={logOutHandler}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;

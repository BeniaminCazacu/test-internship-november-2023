import React from "react";
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidenav">
      <img src="https://source.unsplash.com/3tYZjGSBwbk" alt="Logo image"></img>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default Sidebar;

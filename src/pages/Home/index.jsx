import React from 'react'
import { NavLink } from 'react-router-dom'

import "./style.scss";

const index = () => {
  return (
    <div className="home-page">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}

export default index
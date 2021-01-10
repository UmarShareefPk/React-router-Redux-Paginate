import React from "react";
import {Link , NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav-wrapper blue darken-2">
      <div className="container">
        <div className="left">
          <a className="brand-logo" style={{ textAlign: "left" }} href="/">           
            Router practice in React{" "}
          </a>
        </div>
        <ul className="right menuItems">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>          
          <li>
            <NavLink to="/hoc" title="Higher order component">HOC</NavLink>
          </li>
          <li>
            <NavLink to="/Posts" title="">Pagination</NavLink>
          </li>
          <li>
            <NavLink to="/Upload" title="">Upload</NavLink>
          </li>
          <li>
            <NavLink to="/SignalR" title="">SignalR</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

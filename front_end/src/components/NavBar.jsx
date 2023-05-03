import React from "react";
import "../App.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
    
        </li>

        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="fa-solid fa-house"></i>
            <span className="link-text">Home</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="/playlist" className="nav-link">
            <i className="fa-solid fa-music"></i>
            <span className="link-text">Playlist</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="/addPlaylist" className="nav-link">
            <i className="fa-solid fa-file-circle-plus"></i>
            <span className="link-text">Add Playlist</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

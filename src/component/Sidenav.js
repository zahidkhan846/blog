import React from "react";
import { Link } from "react-router-dom";

function Sidenav({ showSidenav, toggleNavButton }) {
  return (
    <div
      className={showSidenav ? "sidenav" : "hidden"}
      onClick={toggleNavButton}
    >
      <Link className="side-link" to="/">
        Home
      </Link>
      <Link className="side-link" to="/posts">
        Posts
      </Link>
      <Link className="side-link" to="/add-post">
        Add Post
      </Link>
      <Link className="side-link" to="/login">
        Login
      </Link>
    </div>
  );
}

export default Sidenav;

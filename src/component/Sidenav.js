import React from "react";
import { Link } from "react-router-dom";

function Sidenav({ showSidenav, toggleNavButton }) {
  return (
    <div
      className={showSidenav ? "sidenav" : "hidden"}
      onClick={toggleNavButton}
    >
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/posts">
        Posts
      </Link>
      <Link className="p-4" to="/add-post">
        Add Post
      </Link>
      <Link className="p-4" to="/login">
        Login
      </Link>
    </div>
  );
}

export default Sidenav;

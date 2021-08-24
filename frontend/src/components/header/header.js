import { NavLink } from "react-router-dom";

import "./header.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <h1>Blog</h1>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/create-post">New Post</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;

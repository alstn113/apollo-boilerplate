import { NavLink } from "react-router-dom";

import "./header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/posts">PostList</NavLink>
          </li>
          <li>
            <NavLink to="/create-post">Create</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

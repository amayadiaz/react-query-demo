import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/traditional-players">Tradional Players</Link>
        </li>
        <li>
          <Link to="/rq-players">RQ Players</Link>
        </li>
      </ul>
    </nav>
  )
}
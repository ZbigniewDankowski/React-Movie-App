import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <i class="fa-solid fa-film"></i>
        </Link>
      </div>

      <div className="title">Movie App</div>
    </div>
  );
};

export default Header;

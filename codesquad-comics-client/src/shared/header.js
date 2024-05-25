import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <a href="#">
          <img
            src="images/CodeSquad-Comics-logo.png"
            alt="CodeSquad Comics Logo"
          />
        </a>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">LOGIN</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

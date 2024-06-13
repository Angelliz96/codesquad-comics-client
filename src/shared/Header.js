import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch("http://localhost:8080/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        console.log("Logout successful", result);
        setUser({});
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed", error);
        navigate("/admin");
      });
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <img
            src="images/CodeSquad-Comics-logo.png"
            alt="CodeSquad Comics Logo"
          />
        </Link>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          {user.username ? (
            <>
              <li>
                <Link to="/admin">ADMIN</Link>
              </li>
              <li>
                <a href="#" onClick={handleLogout}>LOGOUT</a>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

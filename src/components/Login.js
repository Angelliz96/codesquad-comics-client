import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const body = {
      username: email,
      password: password,
    };

    fetch("http://localhost:8080/login/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((result) => {
      console.log("Login successful");
      localStorage.setItem("user", JSON.stringify(result.data));
      setUser(result.data);
      navigate("/admin");
    })
    .catch((error) => {
      console.error("Login error:", error);
    });
  };

  return (
    <div>
      <main>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Login;

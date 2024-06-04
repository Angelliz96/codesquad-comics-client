import React, { useState } from "react";

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form submitted');

  
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    const loggedInUser = { email, name: "" }; 
    setUser(loggedInUser);
  };

  return (
    <div>
      <main>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id={"email"}
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

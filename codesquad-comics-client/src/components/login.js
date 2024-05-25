import React from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
const Login = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>LOGIN</h1>

        <form action="#" method="post">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <br />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <br />

          <button type="submit">Submit</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Login;

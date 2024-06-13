import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Update from "./components/Update";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {});

  //   {

  //   return savedUser ? JSON.parse(savedUser) : {};
  // });

  // useEffect(() => {
  //   localStorage.setItem('user', JSON.stringify(user));
  // }, [user]);

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* // <Login user={user} setUser={setUser} />
      // <Signup user={user} setUser={setUser} /> */}
      <Footer />
    </div>
  );
}

export default App;

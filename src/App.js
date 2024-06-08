import React, { useState } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './components/Home';
import About from './components/About';
import Admin from './components/Admin';
import Create from './components/Create';
import Login from './components/Login';
import Signup from './components/Signup';
import Update from './components/Update';

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
      <About />
      <Home />
      
      <Admin />
      <Create />
      <Update />
      <Login user={user} setUser={setUser} />
      <Signup user={user} setUser={setUser} />
      <Footer />
    </div>
  );
}

export default App;

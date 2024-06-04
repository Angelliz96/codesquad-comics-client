import React, { useState } from 'react';
import Header from './shared/header';
import Footer from './shared/footer';
import Index from './components/home';
import About from './components/about';
import Admin from './components/admin';
import Create from './components/create';
import Login from './components/login';
import Signup from './components/Signup';
import Update from './components/update';

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
      <Index />
      <Login user={user} setUser={setUser} />
      <Signup user={user} setUser={setUser} />
      <Footer />
    </div>
  );
}

export default App;

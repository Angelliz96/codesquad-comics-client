import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';
import Index from './components/home';
import About from './components/about';
import Admin from './components/admin'
import Create from './components/create'
import Login from './components/login'
import Update from './components/update'



function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Index /> 
      {/* <Footer />  */}
    </div>
  );
}

export default App;

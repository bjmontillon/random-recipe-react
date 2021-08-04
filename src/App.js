import React from 'react'
import './App.css';

import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Apiwrapper from './ApiWrapper/ApiWrapper'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <Apiwrapper />
    </React.Fragment>
  );
}

export default App;

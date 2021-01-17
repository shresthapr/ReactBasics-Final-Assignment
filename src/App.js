import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './App.css';


const App = () => {
  return (

    <Router>
      <Header />
      <Main />
    </Router>

  );
};

export default App;
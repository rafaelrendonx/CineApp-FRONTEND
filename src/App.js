import React, { Component } from 'react';
import Routes from './components/Routes/Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Routes/>
        <p> Hola </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  var successBool = window.navigator.vibrate(patron);
    navigator.vibrate(1000);

  navigator.vibrate([1000,500,2000]);


  //DETENER VIBRACION
  navigator.vibrate(0);
  navigator.vibrate([]);

  navigator.vibrate([0]);


  //DETECTANDO API

  var soporte = "vibrate" in navigator;

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

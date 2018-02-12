import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicExample from './router';
import Day from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BasicExample />
        <Day />
      </div>
    );
  }
}

export default App;

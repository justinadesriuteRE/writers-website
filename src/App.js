import React, { Component } from 'react';
import logo from './openbookcase.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.facebook.com/events/255087998723330/"
            target="_blank"
            rel="noopener noreferrer"
          >
            click for more details
          </a>
        </header>
      </div>
    );
  }
}

export default App;

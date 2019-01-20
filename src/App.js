import React, { Component } from 'react';
import logo from './bookcase.png';
import facebook from './facebook.svg';
import meetup from './meetup.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.facebook.com/events/255087998723330/"
            target="_blank"
            rel="noopener noreferrer"
          >
            click <strong>here</strong> for more details...
          </a>
          <footer class="social-media">
          <p>...or check our virtual presence</p>
              <a className="App-link"
                href="https://www.meetup.com/English-Creative-Writing-Group-Frankfurt/"
                target="_blank"
                rel="noopener noreferrer">
                <img src={meetup} alt="meetup link" />
              </a>
              <a className="App-link"
                  href="https://www.facebook.com/openbookcase/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={facebook} alt="facebook link" />
              </a>
          </footer>
        </section>
      </div>
    );
  }
}

export default App;

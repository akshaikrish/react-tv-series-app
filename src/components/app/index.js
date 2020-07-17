import React, { Component } from 'react';
import Main from '../main'
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>
            Mechanix
          </h1>
          
        </header>

        
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Register
          </a> */}
         
          <Main />
          
      </div>
    );
  }
}

export default App;

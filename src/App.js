import './App.css';

import React, { Component } from 'react';

import PlaceholderImage from 'components/PlaceholderImage';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Placeholder Images</h2>
        </div>
        <p className="App-intro">
          <PlaceholderImage
            width={500}
            height={225}
            color="F48942"
            textColor="FFFFFF"
            text="Text, color & textColor"
          />
          <br />
          <PlaceholderImage
            width={500}
            height={100}
            text="Text, no color"
          />
          <br />
          <PlaceholderImage
            width={500}
            height={100}
            color="1E5EFF"
          />
          <br />
          <PlaceholderImage
            width={500}
          />
        </p>
      </div>
    );
  }
}

export default App;

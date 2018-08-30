import React, { Component } from 'react';
import './App.css';

import VolumeList from "./components/VolumeList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Book List</h1>
        </header>
        <div className="container">
        <VolumeList />
      </div>
      </div>
    );
  }
}

export default App;

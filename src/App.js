/*
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
*/


import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import SidebarExample from './routes'

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      { SidebarExample }
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App;
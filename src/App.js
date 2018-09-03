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
import routes from './routes';
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="icon" href="../../../../favicon.ico" />

        <title>Album example for Bootstrap</title>


        
      </head>

      <body>
      <NavBar />

        { routes }

        <Footer />
      </body>   
    </html>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App;
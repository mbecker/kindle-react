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


import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes';
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class App extends Component {
  
  render() {
    const { history } = this.props;
    return (
      
    
    
      <ConnectedRouter history={history}>
      <div>
      
      
      <NavBar id="top" history={history}/>

        { routes }

        <Footer />
      
      
      </div>   
    </ConnectedRouter>
    
    
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
}

export default App;
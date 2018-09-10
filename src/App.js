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
import Routes from './routes';
import NavBar from './components/NavBar'


class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      collapse: false
    }
    
    this.toggle = this.toggle.bind(this);
  }
  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
    // this.props.onUpdate()
    console.log("toggle: " + this.state.collapse)
  }
  
  
  
  render() {
    const { history } = this.props;
    const { collapse } = this.state;
    return (
      
    
    
      <ConnectedRouter history={history}>
      <div className="wrapper">
      
      
      <NavBar id="top" history={history} collapse={collapse}/>

        <Routes toggle={this.toggle}/>
      
        
      
      
      </div>   
    </ConnectedRouter>
    
    
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
}

export default App;
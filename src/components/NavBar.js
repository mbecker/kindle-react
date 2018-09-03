import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'

import { IoIosBook } from "react-icons/io";


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <header>
        <Collapse isOpen={this.state.collapse}>
      <div class="bg-dark" id="navbarHeader"> 
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">About</h4>
          <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 class="text-white">Navigation</h4>
          <ul class="list-unstyled">
            <li><Link class="text-white" to="/">Home</Link></li>
            <li><Link class="text-white" to="/volumes">Volumes</Link></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    </Collapse>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container d-flex justify-content-between">
      <a href="#" class="navbar-brand d-flex align-items-center">
        <IoIosBook style={{marginRight: 10 + "px"}}/>
        <strong>Books</strong>
      </a>
      
      <Button class="navbar-toggler collapsed" onClick={this.toggle} >
        <span class="navbar-toggler-icon"></span>
      </Button>
    </div>
  </div>
    
</header>

      
    );
  }
}



export default NavBar
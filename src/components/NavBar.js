import React, { Component } from 'react';
import { Collapse, Button, } from 'reactstrap';
import { Link } from 'react-router-dom'

import { IoIosBook } from "react-icons/io";


class NavBar extends Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
    // this.props.onUpdate()
  }

  toggleClose(){
    this.setState({ collapse: false });
  }

  render() {
    const { history } = this.props;
    const { collapse } = this.state;
    history.listen(location => this.toggleClose());
    return (
      <header>
        <Collapse isOpen={collapse}>
          <div className="bg-dark" id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">About</h4>
                  <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Navigation</h4>
                  <ul className="list-unstyled">
                    <li><Link className="text-white" to="/">Home</Link></li>
                    <li><Link className="text-white" to="/volumes">Volumes</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            
            <Link className="text-white" to="/">
              <IoIosBook style={{ marginRight: 10 + "px" }} />
              <strong>Books</strong>
            </Link>
            

            <Button className="navbar-toggler collapsed" onClick={this.toggle} >
              <span className="navbar-toggler-icon"></span>
            </Button>
          </div>
        </div>

      </header>


    );
  }
}



export default NavBar
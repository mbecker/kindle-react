import React, { Component } from 'react';
import { Collapse, Button, } from 'reactstrap';
import { Link } from 'react-router-dom'

import { IoIosBook } from "react-icons/io";


class NavBar extends Component {
  constructor(props) {
    super(props);
    
    this.toggleSubmenu = this.toggleSubmenu.bind(this);
    
    this.state = { isOpenSubmenu: false };
  }
  
  toggleSubmenu() {
    this.setState({ isOpenSubmenu: !this.state.isOpenSubmenu });
    // this.props.onUpdate()
  }


  render() {
    const { history, collapse } = this.props;
    const { isOpenSubmenu } = this.state;
    
    let navCollapseClassName = "active";
    if(!collapse) navCollapseClassName = "";
    
    history.listen(location => console.log("history location change"));
    return (
      
        <nav id="sidebar" className={navCollapseClassName}>
        <div className="sticky-top">
            <div className="sidebar-header">
                <h3>Collection</h3>
            </div>

            <ul className="list-unstyled components">
                <p>Kindle Books</p>
                <li className="">
                    <Link className="" to="/">Books</Link>
                </li>
                <li className="">
                    <Link className="" to="/activities">Activities</Link>
                </li>
                {/*
                <li>
                    <a onClick={this.toggleSubmenu} href="#" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                    <Collapse isOpen={isOpenSubmenu} >
                    <ul className="list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                    </Collapse>
                </li>
                */}
            </ul>

            <ul className="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Contact</a>
                </li>
            </ul>
            </div>
        </nav>
        
       

    );
  }
}



export default NavBar

 /*
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
      */
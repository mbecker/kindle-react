import React, { Component } from 'react';
import { Route, Switch } from 'react-router'

import NoMatch from '../components/NoMatch'
import VolumeList from '../components/VolumeList'
import Volume from "../components/Volume"
import Footer from '../components/Footer'

import { Collapse } from 'reactstrap';

class Routes extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isOpenNavbarSupportedContent: false
    }
    
    this.toggleNavbarSupportedContent = this.toggleNavbarSupportedContent.bind(this);
  }

  toggleNavbarSupportedContent() {
    this.setState({ isOpenNavbarSupportedContent: !this.state.isOpenNavbarSupportedContent });
    // this.props.onUpdate()
  }

  render() {
    const { toggle } = this.props;
    const { isOpenNavbarSupportedContent } = this.state;
    return (
      
        <div id="content">
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={toggle}>
                        <i className="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>
                    
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" onClick={this.toggleNavbarSupportedContent}>
                        <i className="fas fa-align-justify"></i>
                    </button>
                    
                    <Collapse className="navbar-collapse" id="navbarSupportedContent" isOpen={isOpenNavbarSupportedContent}>
                    
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#top">Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#top">Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#top">Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#top">Page</a>
                            </li>
                        </ul>
                    </Collapse>
                </div>
            </nav>
    

    
    <Switch>
      <Route exact path="/" component={VolumeList} />
      <Route path="/volumes" component={VolumeList} />
      <Route path="/book/:title" component={Volume} />
      <Route component={NoMatch} />
    </Switch>
    
    <Footer />
  
  </div>
       

    );
  }
}



export default Routes
import React, { Component } from 'react';
import { Route, Switch } from 'react-router'

import NoMatch from '../components/NoMatch'
import VolumeList from '../components/VolumeList'
import Volume from "../components/Volume"

class Routes extends Component {
  constructor(props) {
    super(props);
    
    // this.toggle = this.toggle.bind(this);
  }

  toggle() {
    // this.setState({ collapse: !this.state.collapse });
    // this.props.onUpdate()
  }

  render() {
    const { toggle } = this.props;
    return (
      
        <div id="content">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" class="btn btn-info" onClick={toggle}>
                        <i class="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    

    
    <Switch>
      <Route exact path="/" component={VolumeList} />
      <Route path="/volumes" component={VolumeList} />
      <Route path="/book/:title" component={Volume} />
      <Route component={NoMatch} />
    </Switch>
  
  </div>
       

    );
  }
}



export default Routes
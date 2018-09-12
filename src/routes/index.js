import React, { Component } from 'react';
import { Route, Switch } from 'react-router'

import NoMatch from '../components/NoMatch'
import VolumeList from '../components/VolumeList'
import VolumeSearch from '../components/VolumeSearch';
import Volume from "../components/Volume"
import Footer from '../components/Footer'

class Routes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            isOpenNavbarSupportedContent: false
        }


        this.handleChange = this.handleChange.bind(this);
        this.clearValue = this.clearValue.bind(this);

        this.toggleNavbarSupportedContent = this.toggleNavbarSupportedContent.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    clearValue(e){
        if(typeof e !== "undefined") e.preventDefault();
        
        this.setState({
            value: ''
        });
    }

    toggleNavbarSupportedContent() {
        this.setState({ isOpenNavbarSupportedContent: !this.state.isOpenNavbarSupportedContent });
        // this.props.onUpdate()
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps: ", nextProps);
        console.log(nextProps.location);
        if (nextProps.location !== this.props.location) {
          console.log("NAVIGATED !!!");
        }
      }

      shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate: ", this.props.history.location.pathname);
        console.log("shouldComponentUpdate: ", nextProps);
        if (nextProps.history.location.pathname !== this.props.history.location.pathname) {
            console.log("NAVIGATED !!!");
          }
    
        return true;
      }

    render() {
        const { toggle, history } = this.props;
        const { isOpenNavbarSupportedContent, value } = this.state;
        history.listen(location => this.clearValue());
        return (

            <div id="content">
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    <div className="container-fluid">

                        <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={toggle}>
                            <i className="fas fa-align-left"></i>
                            <span>Toggle Sidebar</span>
                        </button>
                        <input type="search" style={{ width: 160 + "px" }} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Search Books" value={this.state.value} onChange={this.handleChange} />
                        {/*
                        <div className="input-group" style={{ width: "auto" }}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Search Books</span>
                            </div>
                            
                            <button type="button" className="btn btn-link" onClick={this.clearValue}>Clear</button>
                        </div>

                        
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" onClick={this.toggleNavbarSupportedContent}>
                        <i className="fas fa-align-justify"></i>
                    </button>
                    
                    <Collapse className="navbar-collapse" id="navbarSupportedContent" isOpen={isOpenNavbarSupportedContent}>
                    
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">All Ebooks</Link>
                            </li>
                            
                        </ul>
                    </Collapse>
                */}
                    </div>
                </nav>



                {value.length > 0 ? (
                    <VolumeSearch searchText={value} />
                ) : (
                        <Switch>
                            <Route exact path="/" component={VolumeList} />
                            <Route path="/volumes" component={VolumeList} />
                            <Route path="/book/:title" component={Volume} />
                            <Route component={NoMatch} />
                        </Switch>
                    )}



                <Footer />

            </div>


        );
    }
}



export default Routes
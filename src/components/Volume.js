import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";
import Spinner from "react-spinkit";

import VolumeItem from "./VolumeItem";

class Volume extends Component {

constructor(props) {
    super(props);
    //this.props.fetchVolumes();
    const { volumes } = this.props;
    console.log(volumes);
    if(Object.keys(volumes).length === 0) {
        this.props.fetchVolumes();
    } else {
        // console.log("-- NO fetch volumes --");
    }
}

renderNoBooks(){
    return (
        <div className="col s10 offset-s1 center-align">
            <h4>No book exist</h4>
        </div>
    );
}

renderVolume(){
    const { volumes, match } = this.props;
    
    const volume = _.find(volumes, function(o) { return o.data.title === match.params.title; });
    
    if (typeof volume !== "undefined") {
        console.log(volume.data);
        return (
            <div>
            <section class="jumbotron text-center">
                  <div class="container">
                    <h1 class="jumbotron-heading">{volume.data.title}</h1>
                    <p class="lead text-muted">{volume.data.authors}</p>
                    
                  </div>
                </section>
          
                <VolumeItem key={volume.id} volume={volume.data} volumeId={volume.id} />;
                </div>
        );
    }
    return this.renderNoBooks();
}

  render() {
    const { loading, volumes } = this.props;
    
    return (

      <div>
        {loading ? <Spinner name="line-scale" fadeIn='none' /> : this.renderVolume()}
      </div>
    );
  }
}

const mapStateToProps = ({ loading, volumes }) => {
    return {
        loading
        , volumes
    };
}

export default connect(mapStateToProps, actions)(Volume);
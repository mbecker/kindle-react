import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";

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
            <h4>No books exist</h4>
        </div>
    );
}

renderVolume(){
    const { volumes, match } = this.props;
    console.log(volumes);
    const volume = _.find(volumes, function(o) { return o.data.title === match.params.title; });
    console.log(volume);

    if (typeof volume !== "undefined") {
        return <VolumeItem key={volume.id} volume={volume.data} volumeId={volume.id} />;
    }
    return (
        <div className="col s10 offset-s1 center-align">
            <h4>No books exist</h4>
        </div>
    );
}

  render() {
    const { volumes } = this.props;
    
    return (
      <div className="col s10 offset-s1 volume-list-item teal">
        {(Object.keys(volumes).length === 0) ? this.renderNoBooks() : this.renderVolume()}
      </div>
    );
  }
}

const mapStateToProps = ({ volumes }) => {
    return {
        volumes
    };
}

export default connect(mapStateToProps, actions)(Volume);
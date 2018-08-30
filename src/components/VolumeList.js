import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import VolumeItem from "./VolumeItem";

class VolumeList extends Component {
    state = {
    };


    renderVolumes() {
        const { volumes } = this.props;
        const volumeItems = _.map(volumes, (volume) => {
            return <VolumeItem key={volume.id} volume={volume.data} volumeId={volume.id} />;
        });
        if (!_.isEmpty(volumeItems)) {
            return volumeItems;
        }
        return (
            <div className="col s10 offset-s1 center-align">
                <h4>No books exist</h4>
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.props.fetchVolumes();
    }

    render() {
        return (
            <div className="to-do-list-container">
                <div className="row">
                    {this.renderVolumes()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ volumes }) => {
    return {
        volumes
    };
};

export default connect(mapStateToProps, actions)(VolumeList);
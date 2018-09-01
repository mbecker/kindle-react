import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import VolumeItem from "./VolumeItem";

var Spinner = require('react-spinkit');



class VolumeList extends Component {

    constructor(props) {
        super(props);
        const { volumes } = this.props;
        if(Object.keys(volumes).length === 0) {
            this.props.fetchVolumes();
        }
    }


    state = {
    };


    renderVolumes() {
        const { volumes } = this.props;
        let keyx = 0;
        const volumeItems = _.map(volumes, (volume) => {
            keyx = keyx + 1;
            return <VolumeItem key={volume.id + keyx} volume={volume.data} volumeId={volume.id} />;
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

    

    render() {
        const { loading } = this.props;
        return (
            <div className="to-do-list-container">
                <div className="row" key="row">
                    {loading ? <Spinner name="line-scale" /> : "Not Loading"}
                </div>
                <div className="row" key="row2">                
                    {this.renderVolumes()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ loading, volumes }) => {
    return {
        loading
        , volumes
    };
};

export default connect(mapStateToProps, actions)(VolumeList);
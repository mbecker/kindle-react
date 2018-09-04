import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import VolumeItem from "./VolumeItem";
import Spinner from "react-spinkit";


class VolumeList extends Component {

    constructor(props) {
        super(props);
        const { volumes } = this.props;
        if (Object.keys(volumes).length === 0) {
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
            <div>
                <section class="jumbotron text-center">
                    <div class="container">
                        <h1 class="jumbotron-heading">Books</h1>
                        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>

                    </div>
                </section>
                <div class="album py-5 bg-light">
                    <div class="container">
                        <div class="row">
                            {loading ? <Spinner name="line-scale" fadeIn='none' /> : this.renderVolumes()}
                        </div>
                    </div>
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
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

  state = {};

  renderVolumes() {
    const { volumes } = this.props;
    let keyx = 0;
    const volumeItems = _.map(volumes, volume => {
      keyx = keyx + 1;
      return (
        <VolumeItem
          key={volume.id + keyx}
          volume={volume.data}
          volumeId={volume.id}
        />
      );
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
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Kindle Ebooks</h1>
            <p className="lead text-muted">
              Hopefully most of my Kindle ebooks with their highlights or notes marked.
              The older ones doesn't have so much highlights since I've started to mark paragraphes just a while ago.
              Trying to change that in the next time.
            </p>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {loading ? (
                <div className="col-md-12" style={{textAlign: "center"}}>
                    <Spinner name="line-scale" fadeIn="none" />
                </div>
              ) : (
                this.renderVolumes()
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loading, volumes }) => {
  return {
    loading,
    volumes
  };
};

export default connect(
  mapStateToProps,
  actions
)(VolumeList);
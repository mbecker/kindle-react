import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import VolumeItem from "./VolumeItem";
import Spinner from "react-spinkit";

class VolumeSearch extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  renderVolumes(volumeList) {

    let keyx = 0;
    const volumeItems = _.map(volumeList, volume => {
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
      <div className="col s10 offset-s1 text-center">
        <h4>No books exist</h4>
      </div>
    );
  }

  render() {
    const { searchText, volumes } = this.props;

    const volumeList = _.filter(volumes, function (o) {
      return o.id.toLowerCase().includes(searchText.toLowerCase());
    });

    console.log("volumeList: ", volumeList);
    console.log("Object.keys(volumeList).length: ", Object.keys(volumeList).length)

    return (
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Search Ebooks</h1>
            <h4>{searchText}</h4>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            
              {Object.keys(volumeList).length > 0 ? (
                <div className="row">
                  {this.renderVolumes(volumeList)}
                </div>
              ) : (
                <div className="row">
                  <div className="col"></div>
                  <div className="col-md-6">
                    <p className="card-text" style={{textAlign: "center"}}>No books exist </p>
                  </div>
                  <div className="col"></div>
                  </div>
                )}

            
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
)(VolumeSearch);
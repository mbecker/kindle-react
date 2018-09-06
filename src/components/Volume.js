import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";
import Spinner from "react-spinkit";

import VolumeItem from "./VolumeItem";
import HighlightItem from "./HighlightItem";

class Volume extends Component {
  constructor(props) {
    super(props);
    //this.props.fetchVolumes();
    const { volumes } = this.props;

    if (Object.keys(volumes).length === 0) {
      this.props.fetchVolumes();
    } else {
      // console.log("-- NO fetch volumes --");
    }
  }

  renderNoBooks() {
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">No book exists for this title</h1>
        </div>
      </section>
    );
  }

  renderHighlights(highlights) {
    let keyx = 0;
    const highlightsRender = _.map(highlights, highlight => {
      const key = this.props.volumeId + highlight.location + keyx++;

      return <HighlightItem highlight={highlight} key={key} />;
    });

    if (!_.isEmpty(highlightsRender)) {
      return (
        <div className="col-md-6 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <div>
            <span className="text-muted">Highlights / Notes</span>
            <span className="badge badge-secondary badge-pill" style={{marginLeft: 20 + "px", verticalAlign: "super",}}>{keyx}</span></div>
            <span className="text-muted">Location</span>  
          </h4>
          
          <ul className="list-group mb-3">
            
            {highlightsRender}
          </ul>
        </div>
      );
    }
    return (
      <div className="col-md-4 order-md-2 mb-4">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">No Highlights / Notes</span>
        </h4>
      </div>
    );
  }

  renderVolume() {
    const { volumes, match } = this.props;

    const volume = _.find(volumes, function(o) {
      return o.data.title === match.params.title;
    });

    if (typeof volume !== "undefined") {
      return (
        <div id="volumeTitle">
          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">{volume.data.title}</h1>
              <p className="lead text-muted">{volume.data.authors}</p>
            </div>
          </section>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                <VolumeItem
                  key={volume.id}
                  volume={volume.data}
                  volumeId={volume.id}
                  volumeCount={0}
                />

                {this.renderHighlights(volume.data.highlights)}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return this.renderNoBooks();
  }

  renderLaoding() {
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <Spinner name="line-scale" fadeIn="none" />
        </div>
      </section>
    );
  }

  render() {
    const { loading } = this.props;

    if (loading === true) return this.renderLaoding();

    return this.renderVolume();
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
)(Volume);

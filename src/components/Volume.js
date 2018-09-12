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

    this.state = {
      key: "",
      volumeId: "",
      volume: null, isToggleOn: true
    };
    this.updateVolumeId = this.updateVolumeId.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateVolumeInState = this.updateVolumeInState.bind(this);
  }

  updateVolumeInState(volumes, match, location) {
    
    let volumeTitle = decodeURIComponent(match.params.title);
    if(typeof location.search !== "undefined" && location.search.length > 0) {
      volumeTitle = volumeTitle + decodeURIComponent(location.search);
    }
    

    const volume = _.find(volumes, function (o) {
      return o.data.title === volumeTitle;
    });

    if (typeof volume !== "undefined") {
      this.setState({
        key: volume.id,
        volumeId: volume.data.volumeId,
        volume: volume
      });
    }
  }

  componentDidMount() {
    
    const { volumes, match, location } = this.props;

    // Check if volumes must be fecthed from firebase or if it's alraedy present (aka link from main site)
    if (Object.keys(volumes).length === 0) {
      this.props.fetchVolumes();
    } else if (this.state.volume === null) {
      this.updateVolumeInState(volumes, match, location);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    


    // Update state/current volume ("/books/Kafka%20The%20Guide" is new loaded)
    // Check that nexProps.volumes exists
    if (nextState.key.length === 0 && typeof nextProps.volumes !== "undefined" && typeof nextProps.match !== "undefined" && typeof nextProps.match.params !== "undefined" && typeof nextProps.match.params.title !== "undefined") {
      this.updateVolumeInState(nextProps.volumes, nextProps.match, nextProps.location);
    }


    // if(this.state.key === "" && this.state.volume === null && typeof nextState.key !== "undefined" && nextState.key !== "" && nextState.key.length > 0 && typeof nextState.volume !== "undefined" && typeof nextState.volume.data !== "undefined") {
    //   console.log("Volume.js - shouldComponentUpdate - should update because nextState is the volume: ", nextState.volume);
    //   return true;
    // }

    // if(this.state.volume === null && Object.keys(nextProps).length > 0 && typeof nextProps.match !== "undefined" && typeof nextProps.match.params !== "undefined" && typeof nextProps.match.params.title !== "undefined" && typeof nextProps.volumes !== "undefined" && Object.keys(nextProps.volumes).length > 0) {
    //   const volume = _.find(nextProps.volumes, function (o) {
    //     return o.data.title === nextProps.match.params.title;
    //   });

    //   if (typeof volume !== "undefined") {
    //     console.log("Volume.js - shouldComponentUpdate - setState:", volume.id);
    //     this.setState({
    //       key: volume.id,
    //       volumeId: volume.data.volumeId,
    //       volume: volume
    //     });
    //   }
    // }

    return true;
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleChange(event) {
    this.setState({ volumeId: event.target.value });
  }

  updateVolumeId(e) {
    e.preventDefault();
    const { key, volumeId } = this.state;
    if (typeof key !== "undefined" && key.length > 0 && typeof volumeId !== "undefined" && volumeId.length > 0) {
      this.props.updateVolumeId(key, volumeId);
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
        <div className="col-md-12">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <span className="text-muted">Highlights / Notes</span>
              <span className="badge badge-secondary badge-pill" style={{ marginLeft: 20 + "px", verticalAlign: "super", }}>{keyx}</span></div>
            <span className="text-muted">Location</span>
          </h4>

          <ul className="list-group mb-3">

            {highlightsRender}
          </ul>
        </div>
      );
    }
    return null;
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
    const { key, volumeId, volume } = this.state;
    if (loading === true) return this.renderLaoding();
    if (volume === null) return this.renderNoBooks();
    if (volume !== null) {
      return (
        <div style={{ marginTop: 0 + "px" }}>
          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">{volume.data.title}</h1>
              <p className="lead text-muted">{volume.data.authors}</p>
            </div>
          </section>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="col"></div>
                <VolumeItem
                  key={volume.id}
                  volume={volume.data}
                  volumeId={volume.id}
                  volumeCount={0}

                />
                <div className="col"></div>

              </div>
              <div className="row">

                {this.renderHighlights(volume.data.highlights)}

              </div>


            </div>

          </div >
        </div >

      )
    }



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

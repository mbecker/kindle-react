import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import _ from "lodash";

import HighlightItem from "./HighlightItem";

class VolumeItem extends Component {
  /*
    constructor(props) {
        super(props);
        // this.props.fetchHighlights(this.props.volumeId);
    }
    */

  renderHighlights() {
    const { highlights } = this.props.volume;

    let keyx = 0;
    const highlightsRender = _.map(highlights, highlight => {
      const key = this.props.volumeId + highlight.location + keyx++;

      return <HighlightItem highlight={highlight} key={key} />;
    });

    if (!_.isEmpty(highlightsRender)) {
      return highlightsRender;
    }
    return (
      <div className="col s10 offset-s1 center-align">
        <h4>No highlights exist</h4>
      </div>
    );
  }

  bookImage(linkTo, props) {
    return (
      <Link to={linkTo}>
        <img
          className="card-img-top"
          src={props}
          alt={props}
          style={{ display: "block" }}
          data-holder-rendered="true"
        />
      </Link>
    );
  }

  bookImageDoesNotExist(linkTo) {
    return (
      <Link to={linkTo}>
        <img
          className="card-img-top"
          data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Doesnotexist"
          alt="Thumbnail [100%x225]"
          style={{ height: 225 + "px", width: 100 + "%", display: "block" }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_165a0b457b2%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_165a0b457b2%22%3E%3Crect%20width%3D%22208%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.953125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        />
      </Link>
    );
  }

  render() {
    const { volumeId, volume, volumeCount } = this.props;
    
    let columnClassName = "col-md-4";
    if (volumeCount === 0) columnClassName = "col-md-6";

    const linkTo = "/book/" + volume.title + "#root";

    let bookCover;
    bookCover = this.bookImageDoesNotExist(linkTo);
    
    if (
      typeof volume.book !== "undefined" &&
      typeof volume.book.volumeInfo !== "undefined" &&
      typeof volume.book.volumeInfo.imageLinks !== "undefined"
    ) {
        if(typeof volume.book.volumeInfo.imageLinks.smallThumbnail !== "undefined") bookCover = this.bookImage(linkTo, volume.book.volumeInfo.imageLinks.smallThumbnail);
        if(typeof volume.book.volumeInfo.imageLinks.thumbnail !== "undefined") bookCover = this.bookImage(linkTo, volume.book.volumeInfo.imageLinks.thumbnail);
        if(typeof volume.book.volumeInfo.imageLinks.small !== "undefined") bookCover = this.bookImage(linkTo, volume.book.volumeInfo.imageLinks.small);
        
      
    } else {
      
    }

    return (
      <div className={columnClassName} key={volumeId}>
        <div className="card mb-4 shadow-sm">
          {bookCover}

          <div className="card-body">
            <p className="card-text" style={{textAlign: "center",}}>
              <Link to={linkTo}>{volume.title} </Link>{" "}
            </p>
            {/* <p className="card-text">{this.renderHighlights()}</p> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ highlights }) => {
  return {
    highlights
  };
};

export default connect(
  mapStateToProps,
  actions
)(VolumeItem);
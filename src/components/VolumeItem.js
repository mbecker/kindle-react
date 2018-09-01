import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";
import _ from "lodash";

import HighlightItem from "./HighlightItem"


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
    const highlightsRender = _.map(highlights, (highlight) => {
        
            const key = this.props.volumeId + highlight.location + keyx++;
            
            return <HighlightItem highlight={highlight} key={key}/>
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

 bookImage(props) {
    return (
        <img src={props.small} alt={props.small} />
    );
  }

  bookImageDoesNotExist() {
    return (
        <img src="http://www.piniswiss.com/wp-content/uploads/2013/05/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef-300x199.png" alt="Book Cover does not exists" />
    );
  }

  render() {
    const { volumeId, volume } = this.props;

    let bookCover;

    if(typeof volume.book !== "undefined" && typeof volume.book.volumeInfo !== "undefined" && typeof volume.book.volumeInfo.imageLinks !== "undefined" && typeof volume.book.volumeInfo.imageLinks.small !== "undefined") {
        bookCover = this.bookImage(volume.book.volumeInfo.imageLinks);
    } else {
        bookCover = this.bookImageDoesNotExist();
    }

    const linkTo = "/volume/" + volume.title;

    return (
      <div key={volumeId} className="col s10 offset-s1 volume-list-item teal">
        
        <h4>
        <Link to={linkTo}>{volume.title} </Link>         
        </h4>
        
        {bookCover}
        {this.renderHighlights()}
      </div>
    );
  }
}

const mapStateToProps = ({ highlights }) => {
    return {
        highlights
    };
};

export default connect(mapStateToProps, actions)(VolumeItem);
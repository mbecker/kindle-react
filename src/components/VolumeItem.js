import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";


class VolumeItem extends Component {
  /*
    handleCompleteClick = completeToDoId => {
    const { completeToDo } = this.props;
    completeToDo(completeToDoId);
  };
  <span
            onClick={() => this.handleCompleteClick(todoId)}
            className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
          >
            <i className="large material-icons">done</i>
          </span>
  */
 constructor(props) {
    super(props);
    this.props.fetchHighlights(this.props.volumeId);
}

renderHighlights() {
    const { highlights } = this.props;
    console.log("Hightlights: " + this.props.volumeId);
    console.log(highlights);
    return (
        <div className="col s10 offset-s1 center-align">
            <h4>No books exist</h4>
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
    const { volume } = this.props;

    let bookCover;

    if(typeof volume.book !== "undefined" && typeof volume.book.volumeInfo !== "undefined" && typeof volume.book.volumeInfo.imageLinks !== "undefined" && typeof volume.book.volumeInfo.imageLinks.small !== "undefined") {
        bookCover = this.bookImage(volume.book.volumeInfo.imageLinks);
    } else {
        bookCover = this.bookImageDoesNotExist();
    }



    return (
      <div key={volume.title} className="col s10 offset-s1 volume-list-item teal">
        <h4>
          {volume.title}          
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
// HighlightItem

import React, { Component } from "react";
import { connect } from "react-redux";

class HighlightItem extends Component {
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

  render() {
    const { highlight } = this.props;

    let color = "black";
    let backgroundColor = "white"

    switch (highlight.color) {
      case "gelb":
        backgroundColor = "#FFD929";
        color = "#4c4a4a";
        break;
      case "pink":
        backgroundColor = "#957bbe";
        color = "white";
        break;
      case "blau":
        backgroundColor = "#539DFF";
        break;
      case "Cherries":
        console.log("Cherries are $3.00 a pound.");
        break;
      case "Mangoes":
      case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
      default:
        backgroundColor = "white";
    }

    var divStyle = {
      backgroundColor: backgroundColor,
      color: color
    };
    return (
      <li
        key={highlight.location}
        className="list-group-item d-flex justify-content-between lh-condensed"
      >
        <div>
          <span className="my-0" style={divStyle}>{highlight.content}</span>
        </div>
        <span className="text-muted">{highlight.location}</span>
      </li>
    );
  }
}

export default connect()(HighlightItem);

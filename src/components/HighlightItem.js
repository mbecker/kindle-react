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
		
		let color = "white";
		
		switch (highlight.color) {
		  case "gelb":
		    color = "yellow";
		    break;
		  case "pink":
		    color = "pink";
		    break;
		  case "Bananas":
		    console.log("Bananas are $0.48 a pound.");
		    break;
		  case "Cherries":
		    console.log("Cherries are $3.00 a pound.");
		    break;
		  case "Mangoes":
		  case "Papayas":
		    console.log("Mangoes and papayas are $2.79 a pound.");
		    break;
		  default:
		    color = "white";
		}
		
		var divStyle = {
  		backgroundColor: color
		};
    return (
      <div><span style={divStyle}>{highlight.content}</span><span>- {highlight.location}</span></div>
    );
  }
}


export default connect()(HighlightItem);
import React from 'react';
import { render } from "react-dom";
import { Notes } from "../components/Notes";

require("./Style.css");

export class Plus extends React.Component {
  render() {
    return (
      <div>
        <button className="btn btn-success btn-circle glyphicon glyphicon-plus"></button>
        <span>Add Notes</span>
        <Notes/>
      </div>
    )
  }
}

import React from 'react';
import { render } from "react-dom";
require("./Style.css");

export class Plus extends React.Component {
  render() {
    return (
      <div>
        <button className="btn btn-success btn-circle glyphicon glyphicon-plus"></button>
        <span className="">Add Notes</span>
      </div>
    )
  }
}

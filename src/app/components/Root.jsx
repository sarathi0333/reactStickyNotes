import React from "react";
import { render } from "react-dom";
import { Notes } from "../components/Notes.jsx";

require("./Style.css");


export class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  add(text) {
      var arr= this.state.notes;
      arr.push(text);
      console.log(text);
      this.setState({notes:arr});
  }

  removeNotes(i) {
    // console.log("removing comment" + i);
    var arr = this.state.notes;
    arr.splice(i,1);
    // console.log(arr);
    this.setState({notes:arr})
  }
  updateNotes(newText, i) {
    // console.log("updating comment");
    var arr = this.state.notes;
    arr[i] = newText;  
    this.setState({notes:arr})
  }
  eachNotes(text, i) {
    return (
    <Notes key={i} index={i} saveNotes={this.updateNotes.bind(this)} removeNotes={this.removeNotes.bind(this)}>{text}</Notes>
    )
  }
  render() {
    return (
      <div className="sticki-note">
        <div className="note-container"> 
          <div className="plus">
            <button className="btn btn-warning btn-circle glyphicon glyphicon-plus" onClick={this.add.bind(this,"enter text")}></button>
          </div>
          {
            this.state.notes.map(this.eachNotes.bind(this))
          }
        </div>
      </div>
    )
  }
}

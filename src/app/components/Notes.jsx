import React from 'react';
import { render } from "react-dom";
import Draggable from 'react-draggable';

require("./Style.css");

export class Notes extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: true
    }
  }
  edit() {
    this.setState({editing: true })
  }
  remove() {
    //console.log(" remove comments")
    this.props.removeNotes(this.props.index);
  }
  save() {
    this.props.saveNotes(this.refs.newText.value, this.props.index);
    this.setState({ editing: false })
  }
  renderNormal () {
    return (
      <div className="note">
        <label>Note</label>
        <div className="out-txt">{this.props.children} </div>
        <span onClick={this.edit.bind(this)} className="glyphicon glyphicon-pencil edit-btn" ></span>
        <span className="glyphicon glyphicon-trash trash-btn" onClick={this.remove.bind(this)}></span>
      </div>
     
    )
  }
  renderForm () {
    return (
      <div className="note">
        <label>Note</label>
        <textarea ref="newText" defaultValue={this.props.children}></textarea>
        <span className="glyphicon glyphicon-floppy-disk save-btn" onClick={this.save.bind(this)}></span>
      </div>
    )
  }
  render () {
    if(this.state.editing) {
      return this.renderForm()
    } else {
      return this.renderNormal()
    }
  } 
}
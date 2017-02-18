import React from 'react';
import { render } from "react-dom";


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
      <div className="container">
        <div className="text">{this.props.children} </div>
        <button onClick={this.edit.bind(this)}>Edit</button>
        <button onClick={this.remove.bind(this)}>Remove</button>
      </div>
    )
  }
  renderForm () {
    return (
      <div className="container">
        <label>Note</label>
        <textarea ref="newText" defaultValue={this.props.children}></textarea>
        <button onClick={this.save.bind(this)}>Save</button>
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
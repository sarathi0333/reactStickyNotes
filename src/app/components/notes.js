import React from 'react';
import { render } from "react-dom";
import {Editor, EditorState, ContentState } from 'draft-js';
import Draggable from 'react-draggable';

export class Notes extends React.Component {
  getInitialState () {
    return { editing: true };
  }
  edit() {
    return { editing: true};
  }
  renderNormal () {
    return (
      <div className="col s12 m6">
         <div className="noteContainer card blue-grey darken-1">
            <div className="noteText card-content white-text">
              <span className="card-title">{this.props.children}</span>
            </div>
         </div>
        </div>
    )
  }
  renderForm () {
    return (
      <div className="col s12 m6">
        <div className="noteContainer card blue-grey darken-1">
          <div className="noteText card-content white-text">
            <div class="input-field col s6">
              <label for="textarea1">Note</label>
              <textarea id="textarea1" className="materialize-textarea" ref="newText" defaultValue={this.props.children}></textarea>
            </div>
          </div>
        </div>
      </div>
    )
  }
  render () {
      if (true) {
        return this.renderForm;
      }

  }
}
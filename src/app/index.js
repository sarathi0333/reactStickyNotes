import React from 'react';
import { render } from 'react-dom';

import { Root } from "./components/Root";
import { Plus } from "./components/Plus";
require("./components/Plus.css");

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <p>index js</p>
        <button className="btn btn-success btn-circle">+</button>
        <Root />
        <Plus />
      </div>
    )
  }
}
render(<App/>, window.document.getElementById('app'));

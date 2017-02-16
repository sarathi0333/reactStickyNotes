import React from 'react';
import { render } from 'react-dom';

import { Root } from "./components/Root";
import { Plus } from "./components/Plus";


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <p>index js</p>
        <Root />
        <Plus />
      </div>
    )
  }
}
render(<App/>, window.document.getElementById('app'));

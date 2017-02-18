import React from 'react';
import { render } from 'react-dom';

import { Root } from "./components/Root.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Root />    
      </div>
    )
  }
}
render(<App/>, window.document.getElementById('sticki-note'));

import React from "react";
import { render } from "react-dom";

import { Plus } from "../components/Plus";

export class Root extends React.Component {
  render() {
    return (
      <div> 
         <Plus />
      </div>
    )
  }
}

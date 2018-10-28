import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import ButtonContainer from "./containers/ButtonContainer";
import Pie from "./containers/Pie";

class App extends Component {

  render() {
    let x = 300;
    let y = 300;
    let minViewportSize = Math.min(x, y);
    let radius = (minViewportSize * 0.9) / 2;

    console.log(this.props)

    return (
      <Provider store={store}>
        <div className="appContainer">
          <svg width="300px" height="300px">
            <Pie
              x={x/2}
              y={y/2}
              innerRadius={radius * 0.35}
              outerRadius={radius}
              cornerRadius={2}
              padAngle={0.01}
            />
          </svg>
          <ButtonContainer />
        </div>
      </Provider>
    );
  }
}

export default App;

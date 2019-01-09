import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import store from "./store";
import Theme from "./ui/theme";
import data from "./mock_data/data";

import Navbar from "./components/layout/Navbar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import ErrorBoundary from "./containers/ErrorBoundary";
import Animation from "./containers/Animation";
import PiCntls from "./containers/PiCntls";
import Pie from "./containers/Pie";
import CanvasChart from "./components/CanvasChart";

function Container(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Fragment>{props.children}</Fragment>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

function Navigation(props) {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Fragment>
  );
}

class App extends Component {
  render() {
    return (
      <Container>
       <Navigation/>
        <ErrorBoundary>
        <Pie
            x={150}
            y={150}
            innerRadius={((300 * 0.9) / 2) * 0.35}
            outerRadius={(300 * 0.5) / 2}
            cornerRadius={2}
            padAngle={0.01}
          />
          <PiCntls /> 
          <Animation />
          <CanvasChart width={500} height={300} data={data} />
        </ErrorBoundary>
      </Container>
    );
  }
}

export default App;

import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import store from "./store";
import Theme from "./ui/theme";
import data from "./mock_data/data";

import Navbar from "./components/NavBar/Navbar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import ErrorBoundary from "./containers/ErrorBoundary";

import Flex_Cont from "./containers/Flex_Cont";
import AltTileCont from "./containers/AltTileCont";

import Feature from "./components/Feature";
import Footer from "./components/Footer";
import MastHeader from "./components/MastHeader";
import TitleHeader from "./components/TitleHeader";

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
        <Navigation />
        <ErrorBoundary>
          <MastHeader title="Work In Progress" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
          <Flex_Cont>
            <TitleHeader copy="Cards Secition"/>
          </Flex_Cont>
         <Flex_Cont>
            <Feature
              src="https://picsum.photos/600/400?image=16"
              title={"test"}
              copy={"test copy"}
              link={"www.google.com"}
              cta={"learn more"}
            />
            <Feature
              src="https://picsum.photos/600/400?image=13"
              title={"test"}
              copy={"test copy"}
              link={"www.google.com"}
              cta={"learn more"}
            />
            <Feature
              src="https://picsum.photos/600/400?image=14"
              title={"test"}
              copy={"test copy"}
              link={"www.google.com"}
              cta={"learn more"}
            />

             
          </Flex_Cont>

          <Flex_Cont>
            <TitleHeader copy="Alternating Tiles"/>
          </Flex_Cont>

          <Flex_Cont>
            <AltTileCont/>
          </Flex_Cont>
            <Footer
              email_link={"www.google.com"}
              linkedin_link={"www.google.com"}
              behanced_link={"www.google.com"}
              github_link={"www.google.com"}
            />
        </ErrorBoundary>
      </Container>
    );
  }
}

export default App;

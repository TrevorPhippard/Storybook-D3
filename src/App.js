import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Theme from "./ui/theme";
import data from "./mock_data/data";

import Navbar from "./components/NavBar/Navbar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import ErrorBoundary from "./containers/ErrorBoundary";

import Flex_Cont from "./containers/Flex_Cont";
import AltTileCont from "./containers/AltTileCont";


import Animation from "./containers/Animation";
import Pie from "./containers/Pie";
import CanvasChart from "./components/CanvasChart";

import Feature from "./components/Feature";
import Footer from "./components/Footer";
import MastHeader from "./components/MastHeader";
import TitleHeader from "./components/TitleHeader";


import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore' // make sure you add this for firestore
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

import configureStore from './store'
import { firebase as fbConfig, rrfConfig } from './config'


const initialState = window && window.__INITIAL_STATE__ // set initial state here
const store = configureStore(initialState)
// Initialize Firebase instance
firebase.initializeApp(fbConfig)

function Container(props) {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={rrfConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Fragment>{props.children}</Fragment>
        </ThemeProvider>
      </BrowserRouter>
      </ReactReduxFirebaseProvider>
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
            <TitleHeader copy="D3 + Canvas Secition"/>
          </Flex_Cont>
          <Flex_Cont>
                <Pie
                  x={150}
                  y={150}
                  innerRadius={((300 * 0.9) / 2) * 0.35}
                  outerRadius={(300 * 0.5) / 2}
                  cornerRadius={2}
                  padAngle={0.01}
                />
                <Animation />
                <CanvasChart width={500} height={300} data={data} />
          </Flex_Cont>

         
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

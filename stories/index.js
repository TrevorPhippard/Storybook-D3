import React from 'react';
import { storiesOf } from '@storybook/react';
import { action,actions, configureActions,withActions  } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {defaultTheme,secondTheme} from './../src/ui/theme';

import {
  withKnobs,
  withKnobsOptions,
  text,
  number,
  boolean,
  color,
  select,
  radios,
  array,
  date,
  button,
  object,
  files,
} from '@storybook/addon-knobs';

import { Provider } from 'react-redux';
import store from "../src/store";

import Button from '../src/containers/Button';
import PiCntls from '../src/containers/PiCntls';

import Pie from "../src/containers/Pie";

import Navbar from "../src/components/layout/Navbar";
import SignIn from "../src/components/auth/SignIn";
import SignUp from "../src/components/auth/SignUp";

var pie = <Pie x={150}
                y={150} 
                innerRadius={((300*.9)/2) * 0.35} 
                outerRadius={((300*.5)/2)} 
                cornerRadius={2} 
                padAngle={0.01}/>

var clkButton = <Button id="one" displayValue={3}  onButtonPress={action('clicked', 'PLUS/MINUS')}/>
var clkButtonCont = <PiCntls/>


storiesOf('Pie Chart', module)
.addDecorator(withKnobs)
  .addDecorator(getStory => <Provider store={store}>{ getStory() }</Provider>)
  .add('Pie', () => pie )
  .add('Pie + Button', () => <div> {pie} {clkButtonCont}</div> )
  .add('Theme colours: Knobs', () => {
    const testThemes = {
      defaultTheme: defaultTheme,
      secondTheme: secondTheme,
    };

    const chosenTheme = select('themes', testThemes, defaultTheme);

    return (
      <ThemeProvider theme={chosenTheme}>
            <div> {pie} {clkButtonCont}</div> 
      </ThemeProvider>
    );
  })


storiesOf('Navigation', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <Provider store={store}>{ getStory() }</Provider>)
  .addDecorator(getStory => <BrowserRouter>{ getStory() }</BrowserRouter>)
  .add('Theme colours: Knobs', () => {
    const testThemes = {
      defaultTheme: defaultTheme,
      secondTheme: secondTheme,
    };

    const chosenTheme = select('themes', testThemes, defaultTheme);

    return (
      <ThemeProvider theme={chosenTheme}>
          <div>
                <Navbar />
                <Switch>
                  <Route path="/signin" component={SignIn} />
                  <Route path="/signup" component={SignUp} />
                </Switch>
          </div>
      </ThemeProvider>
    );
  })
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {defaultTheme,secondTheme} from './../src/ui/theme';
import imageFile from './../public/header.png';

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


import MastHeader from "../src/components/MastHeader";


/* wrappers */

const providerCont = getStory => <Provider store={store}>{ getStory() }</Provider>
const browserCont = getStory => <BrowserRouter>{ getStory() }</BrowserRouter>


/* components */

const clkButton = <Button id="one" displayValue={3}  onButtonPress={action('clicked', 'PLUS/MINUS')}/>
const clkButtonCont = <PiCntls/>
const pie = <Pie x={150}
               y={150} 
               innerRadius={((300*.9)/2) * 0.35} 
               outerRadius={((300*.5)/2)} 
               cornerRadius={2} 
               padAngle={0.01}/>


/* theme selector */  

const testThemes = {
  defaultTheme: defaultTheme,
  secondTheme: secondTheme,
};

/** ------------------------------------------------- *
     @desc stories 
/* -------------------------------------------------- */     

storiesOf('Pie Chart', module)
  .addDecorator(withKnobs)
  .addDecorator(providerCont)
  .add('Theme colours: Knobs', () => {

    const chosenTheme = select('themes', testThemes, defaultTheme);

    return (
      <ThemeProvider theme={chosenTheme}>
            <div> {pie} </div> 
      </ThemeProvider>
    );
  })


storiesOf('Navigation', module)
  .addDecorator(withKnobs)
  .addDecorator(providerCont)
  .addDecorator(browserCont)
  .add('Theme colours: Knobs', () => {

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



  storiesOf('MastHeader', module)
  .addDecorator(withKnobs)
  .addDecorator(providerCont)
  .addDecorator(browserCont)
  .add('Theme colours: Knobs', () => {
    const chosenTheme = select('themes', testThemes, defaultTheme);

    return (
      <ThemeProvider theme={chosenTheme}>
          <div>
            <MastHeader title="title" copy="copy" src={ imageFile }/>
          </div>
      </ThemeProvider>
    );
  })
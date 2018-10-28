import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../src/components/Button'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

storiesOf('Buttons', module)
  .add('Button', () => <Button id="one" displayValue={3} onButtonPress={(f)=>f} />)

import React, { Component } from 'react'
import { PLUS,MINUS } from '../actions/constants'
import styled from 'styled-components'
import ThemedButton from '../components/ThemedButton'
import ThemedBtnHeader from '../components/ThemedBtnHeader'

const Container = styled.div`
  padding: 5px;
  display: inline-block;
  margin-bottom:20px;
`

export default class Button extends Component {
  
  triggerHandleButtonPress(e) {
    if (e.target.type !== 'button') { return }
    this.props.onButtonPress( parseInt(e.target.value, 10))
  }

  render() {
    const  triggerHandleButtonPress  =  this.triggerHandleButtonPress.bind(this) 
    const { displayValue, id } = this.props

    return (
          <div  onClick={triggerHandleButtonPress}>
                  <Container>
                    <ThemedBtnHeader displayValue = {displayValue} id = {id}/>
                    <ThemedButton increment={MINUS} primary>{'-'}</ThemedButton>
                    <ThemedButton increment= {PLUS} secondary>{'+'}</ThemedButton>
                  </Container> 
          </div>

    )
  }
}

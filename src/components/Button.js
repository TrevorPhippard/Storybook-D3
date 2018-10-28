import React, { Component } from 'react'
import { PLUS,MINUS } from '../actions/constants'


export default class Button extends Component {
  
  triggerHandleButtonPress(e) {
    if (e.target.type !== 'button') { return }
    const value = parseInt(e.target.value, 10)
    this.props.onButtonPress(value)
  }

  render() {
    const  triggerHandleButtonPress  =  this.triggerHandleButtonPress.bind(this) 
    const { displayValue, id } = this.props


    return (
      <div className="speak_btn" onClick={triggerHandleButtonPress}>
      <h1>{`${id}: ${displayValue}`} </h1>
 
          <button value={MINUS} type="button">
             {'-ç'}
          </button>
          <button value={PLUS} type="button">
             {'+'}
          </button>
      </div>
    )
  }
}

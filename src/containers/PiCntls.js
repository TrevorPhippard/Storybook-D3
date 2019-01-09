import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import { DoStuff } from '../actions/buttonOps'

export class PiCntls extends Component {
  render() {
    const { counter1, counter2,counter3, handleButtonPress } = this.props
    return (
      <Fragment>
        <Button id="bagels" displayValue={counter1.current} onButtonPress={handleButtonPress} />
        <Button id="coffee" displayValue={counter2.current} onButtonPress={handleButtonPress} />
        <Button id="cheese" displayValue={counter3.current} onButtonPress={handleButtonPress} />
      </Fragment>
    )
  }
}

export default connect(
  function mapStateToProps(state, ownProps) {
    return state
  },

  function mapDispatchToProps(dispatch, ownProps) {
    return {
      handleButtonPress(value) { 
        dispatch(DoStuff(value,this.id)) }
    }
  }
)(PiCntls)

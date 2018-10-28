import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../components/Button'
import { DoStuff } from '../actions/buttonOps'

export class ButtonContainer extends Component {
  render() {
    const { counter1, counter2,counter3, handleButtonPress } = this.props
    return (
      <div>
      <Button id="bagels"   displayValue={counter1.current} onButtonPress={handleButtonPress} />
      <Button id="coffee"   displayValue={counter2.current} onButtonPress={handleButtonPress} />
      <Button id="cheese" displayValue={counter3.current} onButtonPress={handleButtonPress} />
      </div>
    )
  }
}

export default connect(
  function mapStateToProps(state, ownProps) {
    return state
  },

  function mapDispatchToProps(dispatch, ownProps) {
    return {
      handleButtonPress(value) { dispatch(DoStuff(value,this.id)) }
    }
  }
)(ButtonContainer)

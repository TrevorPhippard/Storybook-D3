import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

function ThemedButton(props){
  return (
      <button className ={classnames( props.className)} value={props.increment} type="button" >
        {props.children}
      </button>)
}

function buttonColor(props){
  if(props.primary){ return props.theme.primary }
  if(props.secondary){ return props.theme.secondary }
}

export default styled(ThemedButton)`
  padding: 1px 10px;
  color:white;
  background-color: ${buttonColor}
`

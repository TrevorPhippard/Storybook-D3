import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

function btnTxtStle(props){
    if(props.theme.text){ return props.theme.text }
}

const ThemedBtnHeader = (props)=>  <h1 className ={classnames(props.className)}>{`${props.id}: ${props.displayValue}`} </h1>

export default styled(ThemedBtnHeader)`
  font-family: ${btnTxtStle };
  margin:0;
  margin-bottom:2px;
`
import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

const TitleHeader = (props)=> <h2 className={classnames(props.className)}>
                                {props.copy}
                              </h2>

export default styled(TitleHeader)`
    background-color:#eee;
    padding: 30px 0px;
    width:100%;
    text-align: center;
    cursor: pointer;
`
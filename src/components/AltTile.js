
import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

function btnTxtStle(props){
    if(props.theme.text){ return props.theme.text }
}

const AltTile = (props)=> <section  className={classnames(props.className) }>
                                  <div class="layout__item layout__item--body">
                                    <h2>{props.title}</h2>
                                    <p>{props.copy}</p>
                                  </div>
                                  <div class="layout__item layout__item--figure">
                                      <img alt="" src={props.imgSrc}></img>
                                  </div>
                            </section>

export default styled(AltTile)`

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  h2 {
      font-size: 3em;
      line-height: 1.2;
  }

  img{
      width: 100%;
      max-width: 100%;
      height: 100%;
      max-height: 100%;
      vertical-align: middle;
  }

  .layout__item--body {
      padding-top: 1em;
      padding-left: 3.5em;
      flex-grow: 9999;
      flex-basis: 15rem;
  }

  .layout__item--figure {
      width: 50%;
      margin-right: auto;
      flex-grow: 1;
  }

  @media (max-width: 600px) {
    &:not(:first-of-type) {
        margin-top: 3em;
      }
  }
`
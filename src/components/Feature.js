import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

function btnTxtStle(props){
    if(props.theme.text){ return props.theme.text }
}

const Feature = (props)=> <article className={classnames(props.className)}>
                              <img src={props.src} alt="Sample photo"></img>
                              <div class="text">
                                <h3>{props.title}</h3>
                                <p>{props.copy}</p>
                                <a href={props.link} class="btn btn-primary btn-block">{props.cta}</a>
                              </div>
                          </article>


export default styled(Feature)`
    margin: 10px;
    padding: 10px;
    color: #444;
    border-radius: 2px;
    background: #fff;

    h3,p{
      text-align:center;
    }
    p{
      margin-bottom: 10px;
    }

   & a {
      border: none;
      display:block;
      text-align:center;
      cursor: pointer;
      padding: 5px;
      width:150px;
      margin:0 auto;
      color:#fff;
      background: #f00;
      text-decoration: none;
      outline: none;
      border-radius:5px;
  }

  a:hover{
      color:#fff;
      background-color:#f50;
  }


@supports (display: -webkit-flex) or
          (display: -moz-flex) or
          (display: flex) {

        flex: 0 100%;

        @media (min-width: 600px) {
          flex: 0 40%;
        }

        @media (min-width: 900px) {
          flex: 0 30%;
        }

        @media (min-width: 1200px) {
          flex: 0 20%;
        }

        &  img {
          max-width: 100%;
        }
    }

`
import React from "react";
import styled from 'styled-components'
import classnames from 'classnames'

var vH = (window.innerHeight/2);

function btnTxtStle(props){
    if(props.theme.text){ return props.theme.text }
}

const MastHeader = (props)=> <div className={classnames(props.className)}>
                                <div id="bg"></div>
                                <h3 >{props.title}</h3>
                                <p >{props.copy}</p>
                             </div>
               

export default styled(MastHeader)`
padding: ${vH/2}px 0;
font-family: ${btnTxtStle };

#bg{
    position: fixed;
    z-index: -10;
    top: 0;
    width: 100%;
    padding: ${vH}px 0;
    text-transform: uppercase;
    background: url('header.png') no-repeat right 35%;
    background-size: cover;
    align-items: center;
}

h3,p{
    font-family: Eina, sans-serif;
    display: block;
    box-sizing: border-box;
    width: 400px;
    margin: 0 auto;
    text-align: center;
    letter-spacing: 1px;
    color:#fff;
    text-shadow: 2px 2px #1b1464;
    -webkit-font-smoothing: antialiased;
}

h3{
    font-size: 75px;
    line-height: 65px;
    margin-bottom:25px;
}

p{
    font-size: 35px;
    line-height: 35px;
}

`
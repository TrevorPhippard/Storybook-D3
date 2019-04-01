import React, { Component, Fragment } from "react";
import styled from 'styled-components'
import classnames from 'classnames'

var vH = (window.innerHeight/2);

function btnTxtStle(props){
    if(props.theme.text){ return props.theme.text }
}

const Footer = (props)=> <div className={classnames(props.className)}>
                               <div class="footer-inner">
            <div class="footer-grid">
              <div class="footer-group">
                <div class="footer-heading">
                  <h4>Gmail</h4>
                </div>
                <div class="footer-links">
                  <ul>
                    <li> <a href="#">Link1</a></li>
                  </ul>
                </div>
              </div>
              <div class="footer-group">
                <div class="footer-heading">
                  <h4>Github</h4>
                </div>
                <div class="footer-links">
                  <ul>
                    <li> <a href="#">Link1</a></li>
                  </ul>
                </div>
              </div>
              <div class="footer-group">
                <div class="footer-heading">
                  <h4>Behance</h4>
                </div>
                <div class="footer-links">
                  <ul>
                    <li> <a href="#">Link1</a></li>
                  </ul>
                </div>
              </div>
              <div class="footer-group">
                <div class="footer-heading">
                  <h4>LinkedIn</h4>
                </div>
                <div class="footer-links">
                  <ul>
                    <li> <a href="#">Link1</a></li>
                  </ul>
                </div>
              </div>
              <div class="footer-group">
                <div class="footer-heading">
                  <h4>Resumé</h4>
                </div>
                <div class="footer-links">
                  <ul>
                    <li> <a href="#">Link1</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
                                </div>

export default styled(Footer)`

    background-color: #333;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px 0px;
  
  @media (min-width: 400px) {
 
      display: block;
      text-align: left;

  }
  @media (min-width: 400px) {
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      grid-gap: 1rem;
      justify-items: center;
      max-width: 1000px;
      margin: auto;
    }
  }
  @media (min-width: 768px) {
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      grid-gap: 1rem;
      justify-items: center;
      max-width: 1000px;
      margin: auto;
    }
  }
  @media (min-width: 1000px) {
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: auto;
      grid-gap: 1rem;
      justify-items: center;
      max-width: 1000px;
      margin: auto;
    }
  }
  .footer-heading h4 {
    font-weight: 400;
    font-size: 1.2rem;
  }
  
  @media (min-width: 1170px) {
    .footer-group {
      width: 200px;
    }
  }
  .footer-links ul {
    list-style: none;
    padding: 0;
  }
  .footer-links ul li {
    padding: 0.5rem 0;
  }
  .footer-links ul li a {
    color: white;
    transition: color 200ms ease;
  }
  .footer-links ul li a:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`
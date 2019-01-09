import React, { Component } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components'
import classnames from 'classnames'



function sliceTxtStle(props){
  if(props.theme.text){ return props.theme.text }
}



class Slice extends Component {
  
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  // focus() {
  //     this.textInput.current.focus();
  // }

    render() {
      const { value,
            label,
            fill,
            innerRadius = 0,
            outerRadius,
            cornerRadius,
            padAngle,
            ...props
      } = this.props;

      const translate = function(x, y) {
        return `translate(${x}, ${y})`;
      }
      
      const arc = d3.arc()
                  .innerRadius(innerRadius)
                  .outerRadius(outerRadius)
                  .cornerRadius(cornerRadius)
                  .padAngle(padAngle);

      return (
        <g {...props} >
          <path d={arc(value)} fill={fill} />
          <text ref={this.textInput} transform={translate(...arc.centroid(value))} dy="-0em" dx="-2em"  className ={classnames(props.className)}> {label} </text>
        </g >
      );
    }
  }

  export default styled(Slice)`
      font-family: ${sliceTxtStle };
      font-weight:700;
      fill:#333;
    `
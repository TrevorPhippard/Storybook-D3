import React, { Component } from 'react';

import * as d3 from 'd3';

class Slice extends Component {
  
    render() {
      let { value,
            label,
            fill,
            innerRadius = 0,
            outerRadius,
            cornerRadius,
            padAngle,
            ...props
      } = this.props;

      var translate = function(x, y) {
        return `translate(${x}, ${y})`;
      }
      
      let arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .cornerRadius(cornerRadius)
        .padAngle(padAngle);

      return (
        <g 
      
           {...props}
           >
          <path d={arc(value)} fill={fill} />
          <text transform={translate(...arc.centroid(value))} dy=".35em" className="label"> {label} </text>
        </g>
      );
    }
  }


  export default Slice;

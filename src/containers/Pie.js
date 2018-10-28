import React, { Component } from 'react'
import * as d3 from "d3";
import Slice from '../components/Slice'

import { connect } from 'react-redux'



class Pie extends Component {
    constructor(props) {
      super(props);
      this.colorScale = d3.scaleOrdinal(d3.schemeGreens[4]);
      this.renderSlice = this.renderSlice.bind(this);
    }
  
    renderSlice(value, i) {
      let {innerRadius, outerRadius, cornerRadius, padAngle} = this.props;
      console.log(this.props)

     var values= ['bagels',
                  'coffee',
                  'cheese']

      return (
        <Slice key={i}
               innerRadius={innerRadius}
               outerRadius={outerRadius}
               cornerRadius={cornerRadius}
               padAngle={padAngle}
               value={value}
               label={`${values[i]}: ` + value.data}
               fill={this.colorScale(i)} />
      );
    }

    render() {
      let {x, y, counter1, counter2, counter3,} = this.props;
      let data=[
        counter1.current,
        counter2.current,
        counter3.current,
      ];
      
      let pie = d3.pie();
      
      return (
        <g transform={`translate(${x}, ${y})`}>
          {pie(data).map(this.renderSlice)}
        </g>
      );
    }
  }


export default connect(
  function mapStateToProps(state, ownProps) {
    return state
  }
)(Pie)








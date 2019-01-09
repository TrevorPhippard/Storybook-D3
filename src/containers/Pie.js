import React, { Component } from 'react'
import * as d3 from "d3";
import Slice from '../components/Slice';
import { connect } from 'react-redux';
import Theme from './../ui/theme';


class Pie extends Component {
    constructor(props) {
      super(props);
      this.colorScale = d3.scaleOrdinal(d3[Theme.pie][3]);
      this.renderSlice = this.renderSlice.bind(this);
    }
  
    renderSlice(value, i) {
      const {innerRadius, outerRadius, cornerRadius, padAngle} = this.props;
      const values = [ 'bagels', 'coffee', 'cheese'];

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
      const {x, y, counter1, counter2, counter3,} = this.props;
      const data=[
        counter1.current,
        counter2.current,
        counter3.current,
      ];
      
      const pie = d3.pie();

      return (
        <svg width={`${x*2}px`} height={`${y*2}px`}>
        <g transform={`translate(${x}, ${y})`}>
          {pie(data).map(this.renderSlice)}
        </g>
        </svg>
      );
    }
  }
  
export default connect(
  function mapStateToProps(state, ownProps) {
    return state
  }
)(Pie)








import React, { Component } from 'react'
import * as d3 from "d3";

class CanvasChart extends Component {


    xAxis(x,height,context) {

          //centering label in bar 
     const xBan = x.bandwidth() / 2;

      context.textAlign = "center";
      context.textBaseline = "top";

      //position ticks 
      context.beginPath();
      x.domain().forEach((d) => {
        context.moveTo(x(d) + xBan, height );
        context.lineTo(x(d) + xBan, height + 6);
        context.fillText(d, x(d) + xBan, height + 6);
      });

      context.strokeStyle = "black";
      context.stroke();
    }

    yAxis(y,context) {
      const yTickCount = 10,
          yTickFormat = y.tickFormat(yTickCount, "%");

      //setting text
      context.textAlign = "right";
      context.textBaseline = "middle";

      //position ticks
      context.beginPath();
      y.ticks(yTickCount).forEach((d) => {
        context.moveTo(0, y(d));
        context.lineTo(-6, y(d));
        context.fillText(yTickFormat(d), -9, y(d));
      });

      context.strokeStyle = "black";
      context.stroke();
    }

    setLabels(data,context,height,x,y){
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(0,height);
      context.lineTo(0,height);
      context.strokeStyle = "black";
      context.stroke();

      context.save();
      context.rotate(-Math.PI / 2);
      context.textAlign = "right";
      context.textBaseline = "top";
      context.font = "bold 10px sans-serif";
      context.fillText("Frequency", -10, 10);
      context.restore();

      context.fillStyle = "steelblue";

      data.forEach((d) => {
        context.fillRect(x(d.constter), y(d.frequency), x.bandwidth(), height - y(d.frequency));
      });
    }

    componentDidMount() {

      const data = this.props.data
      const canvas = this.canvas
      const context = canvas.getContext('2d')

      const margin = {top: 20, right: 20, bottom: 30, left: 40},
          width = canvas.width - margin.left - margin.right,
          height = canvas.height - margin.top - margin.bottom;

      const x = d3.scaleBand()
                .rangeRound([0, width])
                .padding(0.1)
                .domain(data.map((d) => d.constter));

      const y = d3.scaleLinear()
                .rangeRound([height, 0])
                .domain([0, d3.max(data, (d) => d.frequency)]);


      context.translate(margin.left, margin.top);

      this.xAxis(x,height,context) 
      this.yAxis(y,context) 
      this.setLabels(data,context, height,x,y)
    }

    render() {
      return <canvas width={this.props.width} height={this.props.height} ref={(el) => { this.canvas = el }} />
    }
  }

  export default CanvasChart;
import React, { Component } from 'react';
import CanvasComponent from "./CanvasComponent";

class Animation extends Component {
    constructor(props) {
      super(props);
      this.state = { angle: 0 };
      this.updateAnimationState = this.updateAnimationState.bind(this);
    }
    componentDidMount() {
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
    updateAnimationState() {
      this.setState(prevState => ({ angle: prevState.angle + 1 }));
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
    componentWillUnmount() {
      cancelAnimationFrame(this.rAF);
    }
    render() {
      return <CanvasComponent angle={this.state.angle} />;
    }
  }

  export default Animation;

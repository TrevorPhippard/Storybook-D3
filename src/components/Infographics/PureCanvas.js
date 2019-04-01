import React, { Component } from 'react';


class PureCanvas extends Component {
    shouldComponentUpdate() {
      return false;
    }
    render() {
      return (
        <div>
        <canvas

          ref={node =>
            node ? this.props.contextRef(node.getContext('2d')) : null
          }
        />
        </div>
      );
    }
  }

  export default PureCanvas;

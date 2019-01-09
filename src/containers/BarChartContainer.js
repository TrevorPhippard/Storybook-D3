import React, { Component } from "react";
import * as d3 from "d3";
import BarChart from "../components/BarChart";


class BarChartContainer extends Component {
    state = {
        data: [],
        currentIndex: null
    };

    componentDidMount() {
        d3.csv("/data/Example1.csv").then((nd) => {
            var result = nd.map(a => Number(a.Sales));
            this.setState({ data: result });
        });
    }

    addData = () => {
        this.setState({ data: [...this.state.data, Math.random()] });
    }

    setCurrentIndex = currentIndex =>
        this.setState({
            currentIndex
        });

    render() {
        const { data, currentIndex } = this.state;
        return (
            <div className="App-intro" ref="">
                {data === null ? (
                    "Loading CSV files ..."
                ) : (
                        <div  >
                            <svg width="100%" height="250">
                                <BarChart
                                    data={data}
                                    width={500}
                                    height={250}
                                    x={0}
                                    y={0}
                                    highlightBar={this.setCurrentIndex}
                                    highlightedBar={currentIndex}
                                />
             
                            </svg>
                            <p> {currentIndex !== null ? data[currentIndex] : "select a slice of data"} </p>

                        </div>)}
            </div>
        );
    }
}
export default BarChartContainer;
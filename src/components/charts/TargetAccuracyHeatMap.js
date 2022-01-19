import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class TargetAccuracyHeatMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: this.randomHeatmap(),
            options: {
                chart: {
                  height: 350,
                  type: 'heatmap',
                  toolbar: {
                      show: false
                  }
                },
                dataLabels: {
                  enabled: false
                },
                colors: ["#457B9D", "#98CACC"],
            },
        };
    }

    randomHeatmap = () => {
        const xBins = ["A", "B", "C", "D", "E"]
        const yBins = ["A", "B", "C", "D", "E"]
        const heatmap = yBins.map(name => {
            return ({
                name: name,
                data: xBins.map(x => {
                    return({
                        x: x,
                        y: Math.random()
                    })
                })
            })
        })
        return (heatmap)
    }

    render() {
        return (
        <div id="chart">
            <ReactApexChart 
                options={this.state.options} 
                series={this.state.series} 
                type="heatmap" 
                height={180}
                width={180}
            />
        </div>
        )
    }
}
export default TargetAccuracyHeatMap;
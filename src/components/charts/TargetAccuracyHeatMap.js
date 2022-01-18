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
                colors: ["#008FFB"],
            },
            /* format:
            {
                name: '00-20',
                data: [
                    { x:"00-20",  y: 0.3},
                    { x:"20-40",  y: 0.5},
                    { x:"40-60",  y: 0.8},
                    { x:"60-80",  y: 0.6},
                    { x:"80-100", y: 0.2}
                ]
            },
            */
        };
    }

    randomHeatmap = () => {
        const xBins = ["A", "B", "C", "D", "E"]
        const yBins = ["A", "B", "C", "D", "E"] //["00-20", "20-40", "40-60", "60-80", "80-100"]
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
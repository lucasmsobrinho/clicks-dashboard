import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class ClickSpeedChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'series1',
                data: [1, 31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'series2',
                data: [0, 23, 11, 11, 32, 45, 32, 34, 52, 41]
            }],
            options: {
                chart: {
                    height: 200,
                    width: 100,
                    type: 'area',
                    toolbar: {
                        show: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                yaxis: {
                    tickAmount: 6,
                    min: 6,
                    max: 200,
                },
                xaxis: {
                    tickAmount: 10,
                    min: 0,
                    max: 10,
                },
                tooltip: {
                    x: {
                    },
                },
                legend: {
                    position: "top"
                },

            },
        };
    }
    render() {
        return (
            <div id="chart">
                <ReactApexChart 
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                    height="180px"
                    width="300px"/>
            </div>
        )
    }
}

export default ClickSpeedChart;
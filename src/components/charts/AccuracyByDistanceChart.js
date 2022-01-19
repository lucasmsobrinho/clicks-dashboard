import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class AccuracyByDistanceChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'onTarget',
                data: [44, 55, 41, 37, 22]
            }, {
                name: 'offTarget',
                data: [53, 32, 33, 52, 13]
            }],
            options: {
                chart: {
                type: 'bar',
                stacked: true,
                stackType: '100%'
                },
                colors: ["#457B9D", "#A8DADC"],
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                title: {
                    text: '100% Stacked Bar'
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                    categories: ["d>20", ">40", ">60", ">60", ">60"],
                },
                yaxis: {
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                        return val + "K"
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    show: false,
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
        },
        
        
        };
    }

    

    render() {
        return (
        <div id="chart">
            <ReactApexChart options={this.state.options}
                            series={this.state.series} 
                            type="bar" 
                            height={200} />
        </div>
        )
    }
}

export default AccuracyByDistanceChart;
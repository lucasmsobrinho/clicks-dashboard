import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

const options = {
    chart: {
        animations: {
            enabled: false,
        },
        toolbar: {
            show: false
        },
        type: 'scatter',
        zoom: {
            enabled: false,
        }
    },
    xaxis: {
        tickAmount: 10,
        labels: {
        }
    },
    markers: {
        size: 4,
        hover: {
            size: 5,
        }
    },
    yaxis: {
        tickAmount: 7
    },
    colors: ["#A8DADC", "#457B9D"],
    legend: {
        position: "top"
    },
}

const series = [{
    name: "offTarget",
    data: [
    [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
},{
    name: "onTarget",
    data: [
    [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
}]

class ClickTimeByDistanceChart extends Component {
    render() {
        const series = [{
            name: "offTarget",
            data: this.props.offTargetTimeVsDistance,
        }, {
            name: "onTarget",
            data: this.props.onTargetTimeVsDistance,
        }]
        return (
            <div id="chart">
                <ReactApexChart options={options}
                                series={series} 
                                type="scatter" 
                                height={200} />
            </div>
        );
    }
}

export default ClickTimeByDistanceChart;
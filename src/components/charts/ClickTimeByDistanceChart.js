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
            show: false,
        }, 
        title : {
            text: 'distance (px)',
            offsetY: -15,
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

class ClickTimeByDistanceChart extends Component {
    render() {
        const { onTargetTimeVsDistance, offTargetTimeVsDistance } = this.props
        const series = [{
            name: "offTarget",
            data: offTargetTimeVsDistance,
        }, {
            name: "onTarget",
            data: onTargetTimeVsDistance,
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
import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

const options = {
    chart: {
        type: 'area',
        toolbar: {
            show: false
        },
        animations: {
            enabled: false,
        },
    },
    colors: ["#A8DADC", "#457B9D"],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 3,
    },
    yaxis: {
        labels: {}
    },
    xaxis: {
        tickAmount: 2,
        min: 1,
        max: 10,
        labels: {
            showDuplicates: false,
        },
        title : {
            text: 'time (s)',
            offsetY: -15,
        }
    },
    legend: {
        position: "top"
    },
};

class ClickSpeedChart extends Component {
    shouldComponentUpdate(nextProps) {
        return (nextProps.time % 200 === 0);
    }

    render() {
        const { clickData } = this.props
        const generalCS = clickData.map(({timestamp, clickSpeed}) => {
            return({x: timestamp/1000, y:clickSpeed})
        })
        const accurateCS = clickData.map(({timestamp, onTargetClickSpeed}) => {
            return({x: timestamp/1000, y:onTargetClickSpeed})
        })
    
        const series =  [{
            name: 'Total CS',
            data: generalCS
        }, {
            name: 'Accurate CS',
            data: accurateCS
        }]
        return (
            <div id="chart">
                <ReactApexChart 
                    options={options}
                    series={series}
                    type="area"
                    height="200px"
                    width="300px"/>
            </div>
        );
    }
}

export default ClickSpeedChart;
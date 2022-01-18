import React, { Component } from 'react';
import './Dashboard.css'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.speedChartRef = React.createRef()
    }
    // TODO: call process for each new datapoint.
    // ALSO: store the processed data in Dashboard state (or maybe CDV state)

    getClickSpeed = () => {
        // {timestamp, posX, posY, onTarget}
        if (this.props.clickData == 0) return 0
        const data = [
            {timestamp:0, posX:0, posY:0, onTarget:false},
            ...this.props.clickData]
        const speedData = data.map((dataPoint, index, array) => {
            const prevDataPoint = array[index-1]
            if (prevDataPoint === undefined) return 0
            const timeDiff = dataPoint.timestamp - prevDataPoint.timestamp
            if (timeDiff == 0) return 0
            return {speed: (1000/timeDiff), time: dataPoint.timestamp}
        })
        console.log(speedData)
        return speedData.slice(1)
    }

  
    render() {
        return (
            <div className="dashboard" >
            </div>
        );
    }
}

export default Dashboard;
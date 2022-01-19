import React, { Component } from 'react';
import ClicksFrame from './ClicksFrame';    
import './ClicksDataManager.css';
import RawClicksDataTable from './RawClicksDataTable';
import ClickSpeedChart from './charts/ClickSpeedChart';
import TargetAccuracyHeatMap from './charts/TargetAccuracyHeatMap';
import TotalClicks from './charts/TotalClicks';

const initialState = {
    time: 0,
    running: false,
    gameHasEnded: false,
    totalClicks:0,
    onTargetClicks: 0,
    clickData: [],
}
class ClicksDataManager extends Component {
    constructor(props) {
        super(props);
        
        this.state = initialState;
    }

    componentDidUpdate() {
        if (this.state.running) {
            if (this.state.time === 10000) {
                clearInterval(this.timer)
                this.setState({
                    running: false,
                    gameHasEnded: true,
                })
            }
        } else {
            clearInterval(this.timer)
        }
    }

    startTimer = () => {
        if(!this.state.running) {
            this.setState({running: true})
            this.timer = setInterval(() => this.timeStep(), 10)
        }
    }

    resetData = () => {
        if(!this.state.running) {
            this.setState(initialState, console.log(this.state))
        }
    }

    timeStep = () => {
        this.setState({
                time: this.state.time + 10
        })
    }

    registerClick = (targetPosX, targetPosY, clickPosX, clickPosY, onTarget) => {
        const {clickData, time, totalClicks, onTargetClicks} = this.state
        const clickDistance = Math.sqrt((clickPosX - (targetPosX+25))**2 +(clickPosY - (targetPosY+25))**2)
        const newClick = {
            id: this.state.clickData.length + 1,
            timestamp: time,
            targetPosX: targetPosX,
            targetPosY: targetPosY,
            clickPosX: clickPosX,
            clickPosY: clickPosY,
            onTarget: onTarget,
            clickDistance: clickDistance
        }

        this.setState({
            clickData: [...clickData, newClick],
            totalClicks: totalClicks+1,
            onTargetClicks: onTarget? onTargetClicks+1: onTargetClicks,
        });
    }

    render() {
        const { time, running, gameHasEnded } = this.state
        return (
            <div className="click-data-viewer click-data-grid">
                <div className="card card-tall card-wide clicks-frame">
                    <ClicksFrame
                        registerClick={this.registerClick}
                        startTimer={this.startTimer}
                        resetData={this.resetData}
                        running={running}
                        gameHasEnded={gameHasEnded}
                        time={time}
                    />
                </div>
                <div className="card card-wide card-t2">
                    <ClickSpeedChart />
                </div>
                <div className="card card-w2 card-t2">
                    <TargetAccuracyHeatMap />
                </div>
                <div className="card">
                    <TotalClicks data={this.state}/>
                </div>
                <div className="card"></div>
                <div className="card card-ultra-wide raw-clicks-data-table">
                    <RawClicksDataTable clickData={this.state.clickData}/>
                </div>
            </div>
        );
    }
}

export default ClicksDataManager;
import React, { Component } from 'react';
import ClicksFrame from './ClicksFrame';    
import './ClicksDataManager.css';
import RawClicksDataTable from './RawClicksDataTable';
import ClickSpeedChart from './charts/ClickSpeedChart';
import TargetAccuracyHeatMap from './charts/TargetAccuracyHeatMap';
import TotalClicks from './charts/TotalClicks';

class ClicksDataManager extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: 0,
            running: false,
            clickData: [ ], // {timestamp, posX, posY, onTarget}
            totalClicks:0,
            onTargetClicks: 0
        }
    }

    componentDidUpdate() {
        if (this.state.running) {
            if (this.state.time === 5000) {
                clearInterval(this.timer)
                this.setState({
                    running: false,
                })
            }
        } else {
            clearInterval(this.timer)
        }
    }

    startTimer = () => {
        if(this.state.running === false) {
            this.setState({running: true})
            this.timer = setInterval(() => this.timeStep(), 10)
        }
    }

    resetTimer = () => {
        if(this.state.running === false) {
            this.setState({
                time: 0
            })
        }
    }

    resetData = () => {
        if(this.state.running === false) {
            this.setState({
                clickData: [ ]
            })
        }
    }

    timeStep = () => {
        this.setState({
                time: this.state.time + 10
        })
    }

    registerClick = (targetPosX, targetPosY, clickPosX, clickPosY, onTarget) => {
        const {clickData, time, totalClicks, onTargetClicks} = this.state
        const newClick = {
            id: this.state.clickData.length + 1,
            timestamp: time,
            targetPosX: targetPosX,
            targetPosY: targetPosY,
            clickPosX: clickPosX,
            clickPosY: clickPosY,
            onTarget: onTarget
        }
        this.setState({
            clickData: [...clickData, newClick],
            totalClicks: totalClicks+1,
            onTargetClicks: onTarget? onTargetClicks+1: onTargetClicks,
        });
    }

    render() {
        return (
            <div className="click-data-viewer click-data-grid">
                <div className="card card-tall card-wide">
                    <ClicksFrame
                        registerClick={this.registerClick}
                        startTimer={this.startTimer}
                        resetTimer={this.resetTimer}
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
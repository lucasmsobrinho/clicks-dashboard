import React, { Component } from 'react';
import ClicksFrame from './ClicksFrame';    
import './ClicksDataManager.css';
import RawClicksDataTable from './RawClicksDataTable';
import ClickSpeedChart from './charts/ClickSpeedChart';
import TargetAccuracyHeatMap from './charts/TargetAccuracyHeatMap';
import TotalClicks from './charts/TotalClicks';
import AccuracyByDistanceChart from './charts/AccuracyByDistanceChart';
import ClickTimeByDistanceChart from './charts/ClickTimeByDistanceChart';

const initialState = {
    time: 0,
    running: false,
    gameHasEnded: false,
    totalClicks:0,
    onTargetClicks: 0,
    clickData: [],
    lastClickTime: 0,
    lastOnTargetClickTime: 0,
    clicksOffTargetBySector: Array(5).fill(Array(5).fill(0)),
    clicksOnTargetBySector: Array(5).fill(Array(5).fill(0))
}

class ClicksDataManager extends Component {
    constructor(props) {
        super(props);
        
        this.state = initialState;
    }

    shouldComponentUpdate() {
        return true
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
        const {clickData, time, totalClicks, onTargetClicks, lastOnTargetClickTime,
            clicksOffTargetBySector, clicksOnTargetBySector } = this.state
        const clickDistance = Math.sqrt((clickPosX - (targetPosX+25))**2 +(clickPosY - (targetPosY+25))**2)
        //const xSector = Math.round(5*clickPosX/300)
        //const ySector = Math.round(5*clickPosY/300)
        const newClick = {
            id: this.state.clickData.length + 1,
            timestamp: time,
            targetPosX: targetPosX,
            targetPosY: targetPosY,
            clickPosX: clickPosX,
            clickPosY: clickPosY,
            onTarget: onTarget,
            // processed data // TODO: evaluate if is needed to break this in another obj
            clickDistance: clickDistance.toFixed(2),
            clickSpeed: (1000*(totalClicks+1)/time).toFixed(2),
            onTargetClickSpeed: (1000*(onTargetClicks+(onTarget?1:0))/time).toFixed(2),
        }

        this.setState({
            clickData: [...clickData, newClick],
            totalClicks: totalClicks+1,
            onTargetClicks: onTarget? onTargetClicks+1: onTargetClicks,
            lastOnTargetClickTime: onTarget? time:lastOnTargetClickTime,
            lastClickTime: time,
            clicksOffTargetBySector: clicksOffTargetBySector,
            clicksOnTargetBySector: clicksOnTargetBySector
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
                    <ClickSpeedChart clickData={this.state.clickData} time={this.state.time}/>
                </div>
                <div className="card card-w2 card-t2">
                    <AccuracyByDistanceChart />
                </div>
                <div className="card">
                    <TotalClicks data={this.state}/>
                </div>
                <div className="card">
                    <span style={{fontSize:14, textAlign:'center'}}>Last Click Time </span>
                    {this.state.lastClickTime ? (10 - this.state.lastClickTime/1000).toFixed(2): '-'}<br/>
                    {this.state.lastOnTargetClickTime ? (10 - this.state.lastOnTargetClickTime/1000).toFixed(2): '-'}
                </div>
                <div className="card card-w2 card-t2">
                    <ClickTimeByDistanceChart />
                </div>
            </div>
        );
    }
}

export default ClicksDataManager;
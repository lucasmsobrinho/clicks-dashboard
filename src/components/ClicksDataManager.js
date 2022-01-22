import React, { Component } from 'react';
import ClicksFrame from './ClicksFrame';    
import './ClicksDataManager.css';
import RawClicksDataTable from './RawClicksDataTable';
import ClickSpeedChart from './charts/ClickSpeedChart';
import TargetAccuracyHeatMap from './charts/TargetAccuracyHeatMap';
import TotalClicks from './charts/TotalClicks';
import AccuracyByDistanceChart from './charts/AccuracyByDistanceChart';
import ClickTimeByDistanceChart from './charts/ClickTimeByDistanceChart';
import TravelDistance from './charts/TravelDistance';
import AverageOffTargetDistance from './charts/AverageOffTargetDistance';
import ClickAccuracy from './charts/ClickAccuracy';

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
    clicksOnTargetBySector: Array(5).fill(Array(5).fill(0)),
    onTargetTimeVsDistance: [],
    offTargetTimeVsDistance: [],
    totalTraveledDistance: 0,
    averageOffTargetDistance: 0,
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
            clicksOffTargetBySector, clicksOnTargetBySector, lastClickTime,
            onTargetTimeVsDistance, offTargetTimeVsDistance, totalTraveledDistance,
            averageOffTargetDistance } = this.state
            
        const lastClickPosX = clickData.length > 0 ? clickData.slice(-1)[0].clickPosX : 150
        const lastClickPosY = clickData.length > 0 ? clickData.slice(-1)[0].clickPosY : 150
        
        const clickDistanceFromTarget = Math.sqrt((clickPosX - (targetPosX+25))**2 +(clickPosY - (targetPosY+25))**2)
        const travelDistanceLastClick = Math.sqrt((clickPosX - lastClickPosX)**2 + (clickPosY - lastClickPosY)**2)
        const newPoint = [travelDistanceLastClick, (time-lastClickTime)/1000];

        const newClick = {
            id: this.state.clickData.length + 1,
            timestamp: time,
            targetPosX: targetPosX,
            targetPosY: targetPosY,
            clickPosX: clickPosX,
            clickPosY: clickPosY,
            onTarget: onTarget,
            // processed data // TODO: evaluate if is needed to break this in another obj
            clickDistanceFromTarget: clickDistanceFromTarget.toFixed(2),
            travelDistanceLastClick: travelDistanceLastClick.toFixed(2),
            clickSpeed: (1000*(totalClicks+1)/time).toFixed(2),
            onTargetClickSpeed: (1000*(onTargetClicks+(onTarget?1:0))/time).toFixed(2),
        }

        this.setState({
            clickData: [...clickData, newClick],
            totalClicks: totalClicks+1,
            onTargetClicks: onTargetClicks + (onTarget && 1),
            lastOnTargetClickTime: onTarget? time:lastOnTargetClickTime,
            lastClickTime: time,
            clicksOffTargetBySector: clicksOffTargetBySector,
            clicksOnTargetBySector: clicksOnTargetBySector,
            onTargetTimeVsDistance: onTarget?[...onTargetTimeVsDistance, newPoint]:onTargetTimeVsDistance,
            offTargetTimeVsDistance: onTarget?offTargetTimeVsDistance:[...offTargetTimeVsDistance, newPoint],
            totalTraveledDistance: totalTraveledDistance + travelDistanceLastClick,
            averageOffTargetDistance: averageOffTargetDistance + (!onTarget && clickDistanceFromTarget),
        });
    }

    render() {
        const { time, running, gameHasEnded } = this.state
        return (
            <div className="click-data-viewer">
                <div className="top-dashboard-section">
                    <div className="card card-top">
                        <TotalClicks data={this.state}/>
                    </div>
                    <div className="card card-top">
                        <TravelDistance data={this.state}/>
                    </div>
                    <div className="card card-top">
                        <AverageOffTargetDistance data={this.state}/>
                    </div>
                    <div className="card card-top">
                        <ClickAccuracy data={this.state}/>
                    </div>
                </div>
                <div className="click-data-grid">
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
                        <ClickTimeByDistanceChart 
                            onTargetTimeVsDistance={this.state.onTargetTimeVsDistance}
                            offTargetTimeVsDistance={this.state.offTargetTimeVsDistance}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ClicksDataManager;
import React, { Component } from 'react';
import './ClicksDataManager.css';

class ClicksDataManager extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: 0,
            running: false,
            clickData: [ ] // {timestamp, posX, posY, onTarget}
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

    registerClick = (posX, posY, onTarget) => {
        const {clickData, time} = this.state
        const newClick = {
            timestamp: time,
            posX: posX,
            posY: posY,
            onTarget: onTarget
        }
        this.setState({
            clickData: [...clickData, newClick]
        })
    }

    render() {
        return (
            <div className="click-data-viewer click-data-grid">
                <div className="card card-tall card-wide"></div>
                <div className="card card-wide"></div>
                <div className="card card-tall"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        );
    }
}

export default ClicksDataManager;
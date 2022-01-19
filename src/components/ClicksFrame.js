import React, { Component } from 'react';
import CircleTarget from './CircleTarget';
import './ClicksFrame.css'
import ClicksGameUI from './ClicksGameUI';
import CountdownTimer from './CountdownTimer';

class ClicksFrame extends Component {
    constructor(props) {
        super(props);
        
        this.targetRef = React.createRef()
        this.UIRef = React.createRef()
    }

    frameClickHandler = (event) => {
        event.stopPropagation()
        const {targetPosX, targetPosY} = this.targetRef.current.state
        const clickPosX = event.nativeEvent.offsetX;
        const clickPosY = event.nativeEvent.offsetY;
        this.props.registerClick(targetPosX, targetPosY, clickPosX, clickPosY, false)
        this.targetRef.current.changePosition()
    }

    startGame = (event) => {
        event.stopPropagation()
        this.props.startTimer()
    }

    restartGame = (event) => {
        event.stopPropagation()
        this.props.resetData()
    }

    render() {
        const {running, time, registerClick, gameHasEnded} = this.props
        return (
            <div className='clickable-frame' onClick={this.frameClickHandler}>
                <CountdownTimer time={time} running={running}/>
                <CircleTarget
                    ref={this.targetRef}
                    registerClick={registerClick}
                    runningGame={running}
                />
                <ClicksGameUI
                    ref={this.UIRef}
                    startGame={this.startGame}
                    restartGame={this.restartGame}
                    runningGame={running}
                    gameHasEnded={gameHasEnded}
                />
            </div>
        );
    }
}

export default ClicksFrame;
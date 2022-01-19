import React, { Component } from 'react';
import './CircleTarget.css'

class CircleTarget extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            targetPosX: 0,
            targetPosY: 0,
        }
    }

    changePosition = () => {
        this.setState({
            targetPosY: Math.round(250*Math.random()),
            targetPosX: Math.round(250*Math.random())
        })
    }

    clickHandler = (event) => {
        const {targetPosX, targetPosY} = this.state
        const clickPosX = event.nativeEvent.offsetX + targetPosX;
        const clickPosY = event.nativeEvent.offsetY + targetPosY;
        event.stopPropagation()
        this.props.registerClick(targetPosX, targetPosY, clickPosX, clickPosY, true)
        this.changePosition()
    }
    
    render() {
        const {targetPosX, targetPosY} = this.state
        const { runningGame } = this.props
        return (
            <button className='circle-target'
                style={{
                    marginTop: targetPosY, 
                    marginLeft: targetPosX, 
                    display: runningGame?'block':'none'
                }}
                onClick={this.clickHandler}
            >

            </button>
        );
    }
}

export default CircleTarget;
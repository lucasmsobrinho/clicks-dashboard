import React, { Component } from 'react';
import './CircleTarget.css'

class CircleTarget extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            posX: 0,
            posY: 0
        }
    }

    changePosition = () => {
        this.setState({
            posY: Math.round(250*Math.random()),
            posX: Math.round(250*Math.random())
        })
    }

    clickHandler = (event) => {
        const {posX, posY} = this.state
        event.stopPropagation()
        this.props.registerClick(posX, posY, true)
        this.changePosition()
    }
    
    render() {
        const {posX, posY} = this.state
        return (
            <button className='circle-target'
                style={{marginTop: posY, marginLeft: posX}}
                onClick={this.clickHandler}
            >

            </button>
        );
    }
}

export default CircleTarget;
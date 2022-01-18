import React, { Component } from 'react';
import CircleTarget from './CircleTarget';
import './ClicksFrame.css'

class ClicksFrame extends Component {
    constructor(props) {
        super(props);
        
        this.targetRef = React.createRef()
    }
    
    clickHandler = (event) => {
        const {posX, posY} = this.targetRef.current.state
        this.props.registerClick(posX, posY, false)
        this.targetRef.current.changePosition()
    }

    render() {
        return (
            <div className='clickable-frame' onClick={this.clickHandler}>
                <CircleTarget
                    ref={this.targetRef}
                    registerClick={this.props.registerClick}
                />
            </div>
        );
    }
}

export default ClicksFrame;
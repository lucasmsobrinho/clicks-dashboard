import React, { Component } from 'react';

class CountdownTimer extends Component {
    render() {
        const { time, running } = this.props
        const timeLeft = (10 - time/1000).toFixed(2)
        return (
            <div 
                className="countdown-timer"
                style={{color:(timeLeft<3)?'red':'black', position:'absolute',
                marginLeft: 120, display:running?'block':'none',
                WebkitUserSelect: 'none', userSelect: 'none'}}
            >
                00:0{timeLeft}
            </div>
        );
    }
}

export default CountdownTimer;
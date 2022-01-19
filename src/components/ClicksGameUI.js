import React, { Component } from 'react';
import './ClicksGameUI.css'

class ClicksGameUI extends Component {
    render() {
        const { runningGame, gameHasEnded, startGame, restartGame } = this.props
        return (
            <div className='block-screen'
                style={{display:runningGame?'none':'block', alingItems:'center'}}
            >
            { gameHasEnded ?
                <button className='click-restart-button' onClick={restartGame}>
                    RESTART
                </button> :
                <div className="game-instructions">
                    <span>The dashboard is fed real time with your input data.<br/><br/>
                        Click start, play our mini-game and watch the data flow.
                    </span>
                    <button
                        className="click-start-button"
                        onClick={startGame}
                        style={{marginTop: 20}}
                    >
                        START
                    </button>
                </div>
            }
            </div>
        );
    }
}

export default ClicksGameUI;
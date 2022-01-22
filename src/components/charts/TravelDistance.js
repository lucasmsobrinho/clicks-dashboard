import React from 'react';
import './TotalClicks.css'

const TravelDistance = ({ totalTraveledDistance }) => {
    return (
        <div className="click-counter-viewer">
            <div className="card-title">TRAVEL DISTANCE</div>
            <div className="card-content">
                <span className="correct-clicks"title="clicks on target">{totalTraveledDistance.toFixed(0)}</span> px
            </div>
        </div>
    );
};

export default TravelDistance;
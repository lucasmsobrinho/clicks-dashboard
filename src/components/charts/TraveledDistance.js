import React from 'react';
import './TotalClicks.css'

const TraveledDistance = (props) => {
    const { totalTraveledDistance } = props.data
    return (
        <div className="click-counter-viewer">
            <div className="card-title">Traveled Distance</div>
            <div className="card-content">
                <span className="correct-clicks"title="clicks on target">{totalTraveledDistance.toFixed(0)}</span>
            </div>
        </div>
    );
};

export default TraveledDistance;
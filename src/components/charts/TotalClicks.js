import React from 'react';
import './TotalClicks.css'

const TotalClicks = ({onTargetClicks, totalClicks}) => {
    return (
        <div className="click-counter-viewer">
            <div className="card-title">CLICK COUNTER</div>
            <div className="card-content">
                <span className="correct-clicks"title="clicks on target">{onTargetClicks}</span>
                <span className="total-clicks" title="total clicks">/{totalClicks}</span>
                <span className="total-clicks-description"></span>
            </div>
        </div>
    );
};

export default TotalClicks;
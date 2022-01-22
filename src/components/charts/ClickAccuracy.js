import React from 'react';
import './TotalClicks.css'

const ClickAccuracy = (props) => {
    const {onTargetClicks, totalClicks} = props.data;
    const clickAccuracy = !totalClicks ? 0 : (100*onTargetClicks/totalClicks).toFixed(2)
    return (
        <div className="click-counter-viewer">
            <div className="card-title">CLICK ACCURACY</div>
            <div className="card-content">
                <span className="correct-clicks"title="clicks on target">{clickAccuracy}</span> %
                <span className="total-clicks-description"></span>
            </div>
        </div>
    );
};

export default ClickAccuracy;
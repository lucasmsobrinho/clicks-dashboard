import React from 'react';
import './TotalClicks.css';

const AverageOffTargetDistance = (props) => {
    const { averageOffTargetDistance } = props.data
    return (
        <div className="click-counter-viewer">
            <div className="card-title">Off Target Average Distance</div>
            <div className="card-content">
                <span className="correct-clicks"title="clicks on target">{averageOffTargetDistance.toFixed(0)}</span>
            </div>
        </div>
    );
};

export default AverageOffTargetDistance;
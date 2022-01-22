import React from 'react';
import './TotalClicks.css';

const AverageOffTargetDistance = ({ totalOffTargetDistError, totalClicks, onTargetClicks }) => {
    const offTargetClicks = Math.max(totalClicks-onTargetClicks, 1)
    const averageOffTargetDistance = totalOffTargetDistError/offTargetClicks
    return (
        <div className="click-counter-viewer">
            <div className="card-title">AVERAGE ERROR</div>
            <div className="card-content">
                <span className="correct-clicks"title="clicks on target">{averageOffTargetDistance.toFixed(0)}</span> px
            </div>
        </div>
    );
};

export default AverageOffTargetDistance;
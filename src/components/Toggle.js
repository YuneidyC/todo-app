import React from 'react';
import '../styles/Toggle.css';

function Toggle({ toggled, onClick }) {
    return (
        <div className="Toggle-container">
            <div
                className={`Toggle ${toggled ? 'dark' : ''}`}
                onClick={onClick}>
                <button className="circle"></button>
            </div>
        </div>
    );
}

export { Toggle };

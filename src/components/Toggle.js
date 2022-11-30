import React from 'react';
import '../styles/Toggle.css';

function Toggle({ toggled, onClick }) {
    return (
        <div className="Toggle">
            <div
                className={`Toggle__container ${toggled ? 'dark' : ''}`}
                onClick={onClick}>
                <button
                    className="circle"
                    aria-label={`${
                        toggled ? 'darkMode' : 'lightMode'
                    }`}>
                </button>
            </div>
        </div>
    );
}

export { Toggle };

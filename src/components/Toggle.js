import React from "react";
import '../styles/Toggle.css';

function Toggle({ toggled, onClick }) {
    return (
        <div className="toggle-container">
            <div className={`toggle ${toggled ? "dark" : ""}`} onClick={onClick}>
                <button className="circle"></button>
            </div>
        </div>
    );
}

export { Toggle };

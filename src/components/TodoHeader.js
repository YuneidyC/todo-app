import React from 'react';
import '../styles/TodoHeader.css';

function TodoHeader({ toggled }) {
    return (
        <div className="TodoHeader">
            <p className={`TodoHeader__p ${toggled ? 'dark' : ''}`}>
                Your tasks
            </p>
        </div>
    );
}

export { TodoHeader };

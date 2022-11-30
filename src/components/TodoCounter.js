import React from 'react';
import '../styles/TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }) {
    function calculatePercentage() {
        if (totalTodos === 0) {
            return totalTodos.toFixed(2);
        }
        return ((completedTodos / totalTodos) * 100).toFixed(2);
    }

    return (
        <div className="TodoCounter">
            <span className="TodoCounter__percentage">
                {calculatePercentage()}%
            </span>
            <progress
                className="TodoCounter__progressBar"
                value={calculatePercentage()}
                max="100"></progress>
        </div>
    );
}

export { TodoCounter };

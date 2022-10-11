import React from "react";
import { TodoContext } from "../TodoContext";
import '../styles/TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    function calculatePercentage() {
        if (totalTodos === 0) {
            return totalTodos.toFixed(2);
        }
        return ((completedTodos / totalTodos) * 100).toFixed(2);
    }

    return (
        <div className="TodoCounter">
            <span className="TodoCounter--percentage">{calculatePercentage()}%</span>
            <progress className="TodoCounter--progressBar" value={calculatePercentage()} max="100">
            </progress>
        </div>
    );
}

export { TodoCounter };

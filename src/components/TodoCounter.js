import React from "react";
import '../styles/TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <h2 className="TodoCounter">
            You have completed {completed} out of {total} TODOs.
        </h2>
    );
}

export { TodoCounter };

import React from 'react';
import '../styles/TodoFieldLeft.css';

import { TodoContext } from '../TodoContext';

function TodoFieldLeft() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const { addTodo } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setNewTodoValue('');
    };

    return (
        <div className="TodoFieldLeft">
            <input
                className="TodoFieldLeft--input"
                onChange={onChange}
                type="text"
                placeholder="Add a task"
            />
            <button className="TodoFieldLeft--button" onClick={onSubmit}>
                Create a task
            </button>
        </div>
    );
}

export { TodoFieldLeft };

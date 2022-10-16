import React from 'react';
import '../styles/TodoFieldLeft.css';

import { TodoContext } from '../TodoContext';

function TodoFieldLeft() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [errorInput, setErrorInput] = React.useState(false);

    const { addTodo } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue) {
            addTodo(newTodoValue);
        } else {
            setErrorInput(true);
        }
    };

    return (
        <div className="TodoFieldLeft">
            <input
                className="TodoFieldLeft--input"
                onChange={onChange}
                type="text"
                placeholder="Add a task"
            />
            {errorInput && newTodoValue.length <= 0 ? <span className='TodoForm-error'>{'Field cannot be empty'}</span> : ""}
            <button className="TodoFieldLeft--button" onClick={onSubmit}>
                Create a task
            </button>
        </div>
    );
}

export { TodoFieldLeft };

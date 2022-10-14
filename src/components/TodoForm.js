import React from 'react';
import { TodoContext } from '../TodoContext';
import '../styles/TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        changeRotateButton();
        setOpenModal(false);
    };

    const changeRotateButton = () => {
        const spanButton = document.getElementsByClassName(
            'CreateTodoButton--button__span'
        )[0];
        spanButton.style.transform = 'rotate(0deg)';
        spanButton.addEventListener('mouseover', (event) => {
            spanButton.style.transform = 'rotate(90deg)';
        });
        spanButton.addEventListener('mouseout', (event) => {
            spanButton.style.transform = 'rotate(0deg)';
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        changeRotateButton();
        setOpenModal(false);
        setNewTodoValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <label className="TodoForm-label">Add your TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Add a task"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}>
                    Cancel
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };

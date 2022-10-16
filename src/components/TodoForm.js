import React, { useEffect, useRef } from 'react';
import { TodoContext } from '../TodoContext';
import '../styles/TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [errorInput, setErrorInput] = React.useState(false);

    const { addTodo, openModal, setOpenModal } = React.useContext(TodoContext);

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
        if (newTodoValue) {
            addTodo(newTodoValue);
            changeRotateButton();
            setOpenModal(false);
            setNewTodoValue('');
        } else {
            setErrorInput(true);
        }
    };

    const ref = useRef();
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (openModal) {
                if (ref.current && ref.current.contains(e.target)) {
                    setOpenModal(true);
                } else {
                    setOpenModal(false);
                }
            }
        };
        document.addEventListener('click', checkIfClickedOutside);
        return () => {
            document.removeEventListener('click', checkIfClickedOutside);
            changeRotateButton();
        };
    }, [openModal, setOpenModal]);

    return (
        <form onSubmit={onSubmit} ref={ref}>
            <label className="TodoForm-label">Add your TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Add a task"
            />
            {errorInput && newTodoValue.length <= 0 ? <span className='TodoForm-error'>{'Field cannot be empty'}</span> : ""}
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

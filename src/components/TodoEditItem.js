import React, { useEffect, useRef } from 'react';
import { TodoContext } from "../TodoContext";
import '../styles/TodoEditItem.css';

function TodoEditItem() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [errorInput, setErrorInput] = React.useState(false);

    const { editTextTodo, openEditModal, setOpenEditModal, updateText } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenEditModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue) {
            editTextTodo(newTodoValue);
            setOpenEditModal(false);
            setNewTodoValue('');
        } else {
            setErrorInput(true);
        }
    };

    const ref = useRef();
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (openEditModal) {
                if (ref.current && ref.current.contains(e.target)) {
                    setOpenEditModal(true);
                } else {
                    setOpenEditModal(false);
                }
            }
            e.stopPropagation();
        };
        document.addEventListener('click', checkIfClickedOutside);
        return () => {
            document.removeEventListener('click', checkIfClickedOutside);
        };
    }, [openEditModal, setOpenEditModal]);


    return (
        <form onSubmit={onSubmit} ref={ref}>
            {console.log('here')},
            <label className="TodoEdit-label">Update your task</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder={updateText.text}
            />
            {errorInput && newTodoValue.length <= 0 ? (
                <span className="TodoEdit-error">
                    {'Field cannot be empty'}
                </span>
            ) : (
                ''
            )}
            <div className="TodoEdit-buttonContainer">
                <button
                    type="submit"
                    className="TodoEdit-button TodoEdit-button--cancel"
                    onClick={onCancel}>
                    Cancel
                </button>
                <button
                    type="submit"
                    className="TodoEdit-button TodoEdit-button--update">
                    Update
                </button>
            </div>
        </form>
    );
}

export { TodoEditItem };

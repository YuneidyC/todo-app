import React, { useEffect, useRef } from 'react';
import '../styles/TodoEditItem.css';

import { toast } from 'react-toastify';

function TodoEditItem({ openEditModal, setOpenEditModal, editTextTodo, updateText }) {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [errorInput, setErrorInput] = React.useState(false);

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
            toast.success(`Task '${event.target[0].placeholder}' has been successfully updated to '${newTodoValue}'`);
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
            <label className="TodoEdit__label">Update your task</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder={updateText.text}
            />
            {errorInput && newTodoValue.length <= 0 ? (
                <span className="TodoEdit__error">
                    {'Field cannot be empty'}
                </span>
            ) : (
                ''
            )}
            <div className="TodoEdit__button">
                <button
                    type="submit"
                    className="TodoEdit__cancel"
                    onClick={onCancel}>
                    Cancel
                </button>
                <button
                    type="submit"
                    className="TodoEdit__update">
                    Update
                </button>
            </div>
        </form>
    );
}

export { TodoEditItem };

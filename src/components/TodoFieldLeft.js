import React, { useRef, useEffect } from 'react';
import '../styles/TodoFieldLeft.css';

import { TodoContext } from '../TodoContext';

import { toast } from 'react-toastify';

function TodoFieldLeft() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [errorInput, setErrorInput] = React.useState(false);

    const placeholder = 'Add a task';

    const { addTodo } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue) {
            addTodo(newTodoValue);
            toast.success(`Task '${newTodoValue}' has been added successfully`);
            setNewTodoValue('');
        } else {
            setErrorInput(true);
        }
    };

    const ref = useRef();
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setErrorInput(false);
            }
        };
        document.addEventListener('click', checkIfClickedOutside);
        return () => {
            document.removeEventListener('click', checkIfClickedOutside);
        };
    }, []);

    return (
        <div className="TodoFieldLeft">
            <input
                className="TodoFieldLeft__input"
                onChange={onChange}
                type="text"
                placeholder={placeholder}
                value={newTodoValue}
            />
            {errorInput && newTodoValue.length <= 0 ? (
                <span className="TodoForm__error">
                    {'Field cannot be empty'}
                </span>
            ) : (
                ''
            )}
            <button
                className="TodoFieldLeft__button"
                onClick={onSubmit}
                ref={ref}>
                Create a task
            </button>
        </div>
    );
}

export { TodoFieldLeft };

import React, { useId, useRef, useEffect } from 'react';

import '../styles/TodoItem.css';

import { BsFillTrashFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';

import { toast } from 'react-toastify';

function TodoItem(props) {
    const trashIcon = { color: '#29aab3', fontSize: '20px' };
    const editPencil = { color: '#595959', fontSize: '20px' };
    const id = useId();

    const ref = useRef();
    useEffect(() => {
        const checkIfClickedButton = (e) => {
            if (ref.current && ref.current.contains(e.target)) {
                onClickButton();
            }
            e.stopPropagation();
        };

        const onClickButton = () => {
            if (!props.openEditModal) {
                props.onEdit();
                props.setOpenEditModal(true);
            }
        };

        document.addEventListener('click', checkIfClickedButton);
        return () => {
            document.removeEventListener('click', checkIfClickedButton);
        };
    }, [props.openEditModal, props.setOpenEditModal, props]);

    return (
        <li className={`${props.completed && 'checklist--check'}`}>
            <div className="checklist">
                <input
                    type="checkbox"
                    id={id}
                    className={`checklist-input ${props.completed && 'checklist--check'
                        }`}
                />
                <label
                    htmlFor={id}
                    className={`${props.completed && 'checklist--check'}`}
                    onClick={props.uncheck}></label>
            </div>
            <p
                className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'
                    }`}>
                {props.text}
            </p>
            <button
                className={`TodoItem-MdModeEdit ${props.completed && 'disable'
                    }`} aria-label="update-todo"
                ref={ref}
                disabled={props.completed}>
                <MdModeEdit className="edit" style={editPencil} />
            </button>
            <BsFillTrashFill
                className="trash-can"
                style={trashIcon}
                onClick={() => { props.onDelete(); toast.info(`Task '${props.text}' has been removed`); }}
            />
        </li>
    );
}

export { TodoItem };

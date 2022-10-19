import React, { useId } from 'react';
import '../styles/TodoItem.css';
import { BsFillTrashFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';

function TodoItem(props) {
    const trashIcon = { color: '#29aab3', fontSize: '20px' };
    const editPencil = { color: '#595959', fontSize: '20px' };
    const id = useId();

    return (
        <li className={`${props.completed && 'checklist--check'}`}>
            <div className="checklist">
                <input
                    type="checkbox"
                    id={id}
                    className={`checklist-input ${
                        props.completed && 'checklist--check'
                    }`}
                />
                <label
                    htmlFor={id}
                    className={`${props.completed && 'checklist--check'}`}
                    onClick={props.uncheck}></label>
            </div>
            <p
                className={`TodoItem-p ${
                    props.completed && 'TodoItem-p--completed'
                }`}>
                {props.text}
            </p>
            <MdModeEdit className='edit' style={editPencil} />
            <BsFillTrashFill className='trash-can' style={trashIcon} onClick={props.onDelete} />
        </li>
    );
}

export { TodoItem };

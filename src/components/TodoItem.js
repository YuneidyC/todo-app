import React, { useId } from "react";
import '../styles/TodoItem.css';
import { BsFillTrashFill } from 'react-icons/bs';

function TodoItem(props) {
    const trashIcon = { color: 'plum', fontSize: '20px' };
    const id = useId();

    return (
        <li className={`${props.completed && 'checklist--check'}`}>
            <div className="checklist">
                <input type="checkbox" id={id} className={`checklist-input ${props.completed && 'checklist--check'}`} />
                <label htmlFor={id} className={`${props.completed && 'checklist--check'}`} onClick={props.onComplete}></label>
            </div>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
            <BsFillTrashFill style={trashIcon} onClick={props.onDelete} />
        </li>
    )
}

export { TodoItem };

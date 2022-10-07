import React from "react";
import '../styles/TodoItem.css';


function TodoItem(props) {
    return (
        <li className={`TodoItem ${props.completed && 'TodoItem--completed'}`}>
            <label className="checklist">
                <input type="checkbox" name="radio" className={`input--check ${props.completed && 'input-check--active'}`} />
                <span className={`checkmark  ${props.completed && 'span-check--active'}`} onClick={props.onComplete}></span>
            </label>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
            <img className="Icon--image" src="https://img.icons8.com/cute-clipart/64/000000/delete.png" alt="trash" onClick={props.onDelete} />
        </li>
    )
}

export { TodoItem };

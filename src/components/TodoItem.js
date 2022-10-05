import React from "react";
import '../styles/TodoItem.css';


function TodoItem(props) {

    return (
        <li className="TodoItem">
            <label className="checklist">
                <input type="checkbox" name="radio" className={`input--check ${props.completed && 'Icon-check--active'}`} />
                <span className="checkmark"></span>
            </label>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <img className="Icon--image" src="https://img.icons8.com/cute-clipart/64/000000/delete.png" alt="trash" />
        </li>
    )
}

export { TodoItem };

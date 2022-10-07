import React from 'react';
import '../styles/CreateTodoButton.css';

function CreateTodoButton({ openModal, setOpenModal }) {
    const onClickButton = () => {
        if (openModal) {
            setOpenModal(false);
        } else {
            setOpenModal(true);
        }
    }

    return (
        <div className='CreateTodoButton'>
            <button className='CreateTodoButton--button' onClick={() => onClickButton()}>+</button>
        </div>
    );
}

export { CreateTodoButton };

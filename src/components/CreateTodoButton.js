import React from 'react';
import '../styles/CreateTodoButton.css';

function CreateTodoButton({ openModal, setOpenModal }) {
    const onClickButton = () => {
        const spanButton = document.getElementsByClassName(
            'CreateTodoButton--button__span'
        )[0];
        if (openModal) {
            setOpenModal(false);
            spanButton.addEventListener('click', (event) => {
                spanButton.style.transform = 'rotate(45deg)';
            });
            spanButton.addEventListener('mouseover', (event) => {
                spanButton.style.transform = 'rotate(90deg)';
            });
            spanButton.addEventListener('mouseout', (event) => {
                spanButton.style.transform = 'rotate(0deg)';
            });
        } else {
            setOpenModal(true);
            spanButton.addEventListener('click', (event) => {
                spanButton.style.transform = 'rotate(0deg)';
            });
            spanButton.addEventListener('mouseover', (event) => {
                spanButton.style.transform = 'rotate(135deg)';
            });
            spanButton.addEventListener('mouseout', (event) => {
                spanButton.style.transform = 'rotate(45deg)';
            });
        }
    };

    return (
        <div className="CreateTodoButton">
            <button
                className="CreateTodoButton--button"
                onClick={() => onClickButton()}>
                <span className="CreateTodoButton--button__span">+</span>
            </button>
        </div>
    );
}

export { CreateTodoButton };

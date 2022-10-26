import React, { useEffect, useRef } from 'react';
import '../styles/CreateTodoButton.css';

function CreateTodoButton({ openModal, setOpenModal, toggled }) {
    const ref = useRef();
    useEffect(() => {
        const checkIfClickedButton = (e) => {
            if (ref.current && ref.current.contains(e.target)) {
                onClickButton();
            }
            e.stopPropagation();
        };

        const onClickButton = () => {
            const spanButton = document.getElementsByClassName(
                'CreateTodoButton__button__span'
            )[0];
            // TodoForm click is received earlier than this so close logic is in there
            if (!openModal) {
                setOpenModal(true);
                spanButton.addEventListener('click', () => {
                    spanButton.style.transform = 'rotate(0deg)';
                });
                spanButton.addEventListener('mouseover', () => {
                    spanButton.style.transform = 'rotate(135deg)';
                });
                spanButton.addEventListener('mouseout', () => {
                    spanButton.style.transform = 'rotate(45deg)';
                });
            }
        };

        document.addEventListener('click', checkIfClickedButton);
        return () => {
            document.removeEventListener('click', checkIfClickedButton);
        };
    }, [openModal, setOpenModal]);

    return (
        <div className={`CreateTodoButton ${toggled ? 'dark' : ''} `}>
            <button className="CreateTodoButton__button" ref={ref}>
                <span className="CreateTodoButton__span">+</span>
            </button>
        </div>
    );
}

export { CreateTodoButton };

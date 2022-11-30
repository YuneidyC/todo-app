import React from 'react';
import '../styles/TodoImageLeft.css';

import image from '../assets/images/remote-g277dac5f3_1280 2.png';

function TodoImageLeft() {
    return (
        <div className="TodoImageLeft">
            <img
                className="TodoImageLeft__img"
                src={image}
                alt="People making tasks"
            />
        </div>
    );
}

export { TodoImageLeft };

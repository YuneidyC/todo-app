import React from "react";

import { TodoProvider } from '../TodoContext';
import { App } from "./App";

import '../index.css';

function AppUI() {
    return (
        <TodoProvider>
            <App />
        </TodoProvider>
    );
}

export default AppUI;

import React from "react";
import { TodoProvider } from "../TodoContext";
import { App } from "./App";


function AppUi() {
    return (
        <TodoProvider>
            <App />
        </TodoProvider>
    );
}

export default AppUi;

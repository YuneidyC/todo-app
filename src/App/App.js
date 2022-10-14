import './App.css';
import React from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { TodoProvider } from '../TodoContext';
import { Mobile } from './Mobile';
import { Desktop } from './Desktop';

function App() {
    const matches = useMediaQuery('(min-width: 1000px)');

    return (
        <TodoProvider>
            {matches ? <Desktop /> : <Mobile />}
        </TodoProvider>
    );
}

export { App };

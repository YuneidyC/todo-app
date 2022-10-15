import React from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { TodoProvider } from '../TodoContext';
import { Mobile } from './Mobile';
import { Desktop } from './Desktop';
import { CgDarkMode } from 'react-icons/cg';

function App() {
    const matches = useMediaQuery('(min-width: 1000px)');
    const [darkMode, setDarkMode] = React.useState(false);

    const styleDarkMode = { color: '#29aab3', width: '25px', height: '25px' };

    React.useEffect(() => {
        const header = document.getElementsByClassName('TodoHeader--p')[0];
        const button = document.getElementsByClassName('CreateTodoButton')[0];
        if (darkMode) {
            document.body.classList.add('dark');
            header.classList.add('dark');
            if (button) {
                button.classList.add('dark');
            }
        } else {
            document.body.classList.remove('dark');
            header.classList.remove('dark');
            if (button) {
                button.classList.remove('dark');
            }
        }
    }, [darkMode]);

    return (
        // prettier-ignore
        <TodoProvider>
            <CgDarkMode className='darkMode--button' style={styleDarkMode} onClick={() => setDarkMode(!darkMode)}/>
            {matches ? <Desktop /> : <Mobile />}
        </TodoProvider>
    );
}

export { App };

import React from 'react';
import { v4 as uuid } from 'uuid';

import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
    // prettier-ignore
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [toggled, setToggled] = React.useState(false);

    const completedTodos = todos.filter((todo) => todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];
    const unique_id = uuid();

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
            id: unique_id,
        });
        saveTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    const checkOrUncheck = (id) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        if (newTodos[todoIndex].completed) {
            newTodos[todoIndex].completed = false;
        } else {
            newTodos[todoIndex].completed = true;
        }
        saveTodos(newTodos);
    }

    const handleClick = () => {
        setToggled((s) => !s);
        if (!toggled) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }

    return (
        // prettier-ignore
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            deleteTodo,
            checkOrUncheck,
            openModal,
            setOpenModal,
            toggled,
            setToggled,
            handleClick
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };

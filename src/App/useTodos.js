import React from 'react';
import { v4 as uuid } from 'uuid';

import { useLocalStorage } from './useLocalStorage';

function useTodos() {
    // prettier-ignore
    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItems: sincronizeTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [updateText, setUpdateText] = React.useState('');
    const [updateStorage, setUpdateStorage] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [openEditModal, setOpenEditModal] = React.useState(false);
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

    const onEdit = (id) => {
        const todoIndex = todos.find((todo) => todo.id === id);
        setOpenEditModal(true);
        setUpdateText(todoIndex);
    };

    const editTextTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex((todo) => todo.id === updateText.id);
        newTodos[todoIndex].text = text;
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
    };

    const handleClick = () => {
        setToggled((s) => !s);
        if (!toggled) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    };

    return {
        // prettier-ignore
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
        deleteTodo,
        checkOrUncheck,
        openModal,
        setOpenModal,
        toggled,
        setToggled,
        handleClick,
        onEdit,
        openEditModal,
        setOpenEditModal,
        editTextTodo,
        updateText,
        searchedTodos,
        sincronizeTodos,
        updateStorage,
        setUpdateStorage,
    };
}

export { useTodos };

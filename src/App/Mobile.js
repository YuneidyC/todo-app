import React from 'react';

import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoHeader } from '../components/TodoHeader';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoForm } from '../components/TodoForm';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../components/Modal';
import { Toggle } from '../components/Toggle';
import { TodoEditItem } from '../components/TodoEditItem';

function Mobile() {
    // prettier-ignore
    const {
        error,
        loading,
        searchedTodos,
        deleteTodo,
        openModal,
        setOpenModal,
        checkOrUncheck,
        toggled,
        handleClick,
        onEdit,
        openEditModal,
        setOpenEditModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <Toggle toggled={toggled} onClick={handleClick} />
            <TodoHeader toggled={toggled} />
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                <div className="TodoList__container">
                    {error && <p>Error</p>}
                    {loading && (
                        <div className="loading">
                            Loading...
                            <span className="loading__span"></span>
                        </div>
                    )}
                    {!loading && !searchedTodos.length && (
                        <p>Create your first TODO!</p>
                    )}

                    {searchedTodos.map((todo, index) => (
                        <TodoItem
                            key={index}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            onDelete={() => deleteTodo(todo.id)}
                            uncheck={() => checkOrUncheck(todo.id)}
                            onEdit={() => onEdit(todo.id)}
                            openEditModal={openEditModal}
                            setOpenEditModal={setOpenEditModal}
                        />
                    ))}
                </div>
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            {openEditModal && (
                <Modal>
                    <TodoEditItem />
                </Modal>
            )}

            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
                toggled={toggled}
            />
        </React.Fragment>
    );
}

export { Mobile };

// import './App.css';
import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../components/Modal';


function App() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Error</p>}
                {loading && <p>Loading...</p>}
                {(!loading && !searchedTodos.length) && <p>Create your first TODO!</p>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <p>{searchedTodos.length > 0 && searchedTodos[0].text}</p>
                </Modal>
            )}

            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { App };

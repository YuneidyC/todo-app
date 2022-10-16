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

function Mobile() {
    // prettier-ignore
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
            <TodoHeader />
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                <div className="TodoList--container">
                    {error && <p>Error</p>}
                    {loading && (
                        <div className="ring-loading">
                            Loading...
                            <span className="ring-loading__span"></span>
                        </div>
                    )}
                    {!loading && !searchedTodos.length && (
                        <p>Create your first TODO!</p>
                    )}

                    {searchedTodos.map((todo, index) => (
                        <TodoItem
                            key={index}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.id)}
                            onDelete={() => deleteTodo(todo.id)}
                        />
                    ))}
                </div>
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { Mobile };

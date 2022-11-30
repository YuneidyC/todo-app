import React from "react";

import './App.css';

import MediaQuery from 'react-responsive';

import { useTodos } from "./useTodos";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoHeader } from '../components/TodoHeader';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoForm } from '../components/TodoForm';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../components/Modal';
import { Toggle } from '../components/Toggle';
import { TodoEditItem } from '../components/TodoEditItem';
import { TodoHeaderLeft } from '../components/TodoHeaderLeft';
import { TodoImageLeft } from '../components/TodoImageLeft';
import { TodoFieldLeft } from '../components/TodoFieldLeft';
import { ChangeAlert } from '../components/ChangeAlert';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AppUI() {
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
        setOpenEditModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        editTextTodo,
        updateText,
        addTodo,
        sincronizeTodos,
        updateStorage,
        setUpdateStorage
    } = useTodos();
    return (
        // prettier-ignore
        <React.Fragment>
            <main>
                <MediaQuery minWidth={1000}>
                    <section className="section__left">
                        <div className="section__left__container">
                            <TodoHeaderLeft />
                            <TodoFieldLeft
                                addTodo={addTodo}
                            />
                            <TodoImageLeft />
                        </div>
                    </section>
                </MediaQuery>
                <section className="section__right">
                    <section className='header'>
                        <Toggle toggled={toggled} onClick={handleClick} />
                        <TodoHeader toggled={toggled} />
                    </section>
                    <section className='counterSearch'>
                        <TodoCounter
                            totalTodos={totalTodos}
                            completedTodos={completedTodos}
                        />
                        <TodoSearch
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            loading={loading}
                        />
                    </section>
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
                            {!loading && searchedTodos.map((todo, index) => (
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
                </section>
                <MediaQuery maxWidth={999}>
                    {openModal && (
                        <Modal>
                            <TodoForm
                                addTodo={addTodo}
                                openModal={openModal}
                                setOpenModal={setOpenModal}
                            />
                        </Modal>
                    )}
                    <CreateTodoButton
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        toggled={toggled}
                    />
                </MediaQuery>
                {openEditModal && (
                    <Modal>
                        <TodoEditItem
                            editTextTodo={editTextTodo}
                            openEditModal={openEditModal}
                            setOpenEditModal={setOpenEditModal}
                            updateText={updateText}
                        />
                    </Modal>
                )}
            </main>
            <ChangeAlert
                sincronize={sincronizeTodos}
                updateStorage={updateStorage}
                setUpdateStorage={setUpdateStorage}
            />
            <ToastContainer
                closeOnClick
                autoClose={3000}
                className={'toast-message'}
            />
        </React.Fragment >
    );
}

export default AppUI;

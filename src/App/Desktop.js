import React from "react";

import '../styles/Desktop.css';

import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoHeader } from '../components/TodoHeader';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoContext } from '../TodoContext';
import { TodoHeaderLeft } from '../components/TodoHeaderLeft';
import { TodoImageLeft } from "../components/TodoImageLeft";
import { TodoFieldLeft } from "../components/TodoFieldLeft";

function Desktop() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <main>
                <section className="section--left">
                    <div className="section--left-container">
                        <TodoHeaderLeft />
                        <TodoFieldLeft />
                        <TodoImageLeft />
                    </div>
                </section>

                <section className="section--right">
                    <TodoHeader />
                    <TodoCounter />
                    <TodoSearch />
                    <TodoList>
                        <div className='TodoList--container'>
                            {error && <p>Error</p>}
                            {loading &&
                                <div className='ring-loading'>
                                    Loading...
                                    <span className='ring-loading__span'></span>
                                </div>}
                            {(!loading && !searchedTodos.length) && <p>Create your first TODO!</p>}

                            {searchedTodos.map((todo, index) => (
                                <TodoItem
                                    key={index}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => completeTodo(todo.text)}
                                    onDelete={() => deleteTodo(todo.text)}
                                />
                            ))}
                        </div>
                    </TodoList>
                </section>
            </main>
        </React.Fragment>
        );
}

export { Desktop };

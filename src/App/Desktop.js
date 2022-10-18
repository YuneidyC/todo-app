import React from 'react';

import '../styles/Desktop.css';

import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoHeader } from '../components/TodoHeader';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoContext } from '../TodoContext';
import { TodoHeaderLeft } from '../components/TodoHeaderLeft';
import { TodoImageLeft } from '../components/TodoImageLeft';
import { TodoFieldLeft } from '../components/TodoFieldLeft';
import { Toggle } from '../components/Toggle';

function Desktop() {
    // prettier-ignore
    const {
        error,
        loading,
        searchedTodos,
        deleteTodo,
        checkOrUncheck,
        toggled,
        handleClick
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
                    <Toggle toggled={toggled} onClick={handleClick} />
                    <TodoHeader toggled={toggled} />
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
                                    id={todo.id}
                                    completed={todo.completed}
                                    onDelete={() => deleteTodo(todo.id)}
                                    uncheck={() => checkOrUncheck(todo.id)}
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

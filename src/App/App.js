// import './App.css';
import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from '../TodoContext';


function App() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter
            // total={totalTodos}
            // completed={completedTodos}
            />
            <TodoSearch
            // searchValue={searchValue}
            // setSearchValue={setSearchValue}
            />
            {/* <TodoContext.Consumer>
                    {({
                        error,
                        loading,
                        searchedTodos,
                        completeTodo,
                        deleteTodo,
                    }) => ( */}
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
            {/* )}
                </TodoContext.Consumer> */}
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { App };

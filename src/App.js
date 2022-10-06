// import './App.css';
import React from "react";
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const todos = [
    { text: 'Cut onion', completed: false },
    { text: 'Clean up kitchen', completed: true },
    { text: 'Make bathroom', completed: false }
];

function App() {
    const [todos, setTodos] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    return (
        <React.Fragment>
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch
            <TodoCounter />
            <TodoSearch />
            />
            <TodoList>
                {todos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} />
                ))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export default App;

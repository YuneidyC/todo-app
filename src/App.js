// import './App.css';
import react from "react";
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const todos = [
  { text: 'Cut onion', completed: false },
  { text: 'Clean up kitchen', completed: false },
  { text: 'Make bathroom', completed: false }
];

function App() {
  return (
   <react.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />      
   </react.Fragment>
  );
}

export default App;

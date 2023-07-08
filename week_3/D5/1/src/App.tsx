// Import necessary modules from React and other components
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

// Define the App component
function App() {
  // Initialize a state variable todos with an empty array. 
  // The todos state will be an array of Todo objects.
  const [todos, setTodos] = useState<Todo[]>([]);

  // Define a function to handle the addition of new todos
  const todoHandler = (text: string) => {
    // Update the todos state to include the new todo
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}]);
  };

  // Define a function to handle the deletion of todos
  const todoDeleteHandler = (todoId: string) => {
    // Update the todos state to exclude the deleted todo
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  // The component returns a div that includes a NewTodo component and a TodoList component.
  return (
    <div className="App">
      {/* The NewTodo component is passed the todoHandler function as a prop */}
      <NewTodo onAddTodo={todoHandler}/>
      {/* The TodoList component is passed the todos state and the todoDeleteHandler function as props */}
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

// Export the App component for use in other files.
export default App;

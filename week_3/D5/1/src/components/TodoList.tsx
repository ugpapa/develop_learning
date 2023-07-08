// Import necessary modules from React and external styles
import React from "react";
import './TodoList.css'

// Define the shape of the properties accepted by TodoList component.
// items: an array of todo objects each with an id and text
// onDeleteTodo: a function that takes an id of a todo to delete
interface TodoListProps {
    items: {id: string; text: string}[];
    onDeleteTodo: (id: string) => void;   
}

// Define the TodoList component. It's a functional component (FC) that takes TodoListProps as properties (props).
const TodoList: React.FC <TodoListProps> = props => {
    
    // The component returns an unordered list (<ul>).
    // For each item in props.items, it generates a list item (<li>) that includes the item text and a delete button.
    return (
    <ul>
        {props.items.map(todo => (
        <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete</button>
        </li>
        )) }
    </ul>
    );
};

// Export the TodoList component for use in other files.
export default TodoList; 
// Import necessary modules from React and external styles
import React, { useRef } from 'react';
import './NewTodoList.css';

// Define the shape of the properties accepted by NewTodo component.
// onAddTodo: a function that takes a string (the todo text) to add a new todo
type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

// Define the NewTodo component. It's a functional component (FC) that takes NewTodoProps as properties (props).
const NewTodo: React.FC<NewTodoProps> = props => {
    // Initialize a reference to the text input field.
    const textInputRef = useRef<HTMLInputElement>(null);

    // Define a function to handle the submit event of the form
    const todoSubmitHandler = (event: React.FormEvent) => {
        // Prevent the default form submission behavior.
        event.preventDefault();

        // Get the value of the text input field, which is the entered todo text.
        const enteredText = textInputRef.current!.value; 

        // Call the onAddTodo function prop with the entered text to add a new todo.
        props.onAddTodo(enteredText);
    };

    // The component returns a form that includes a text input field and a submit button.
    return (
        <form onSubmit={todoSubmitHandler}>
            <div className='form-control'>
                <label htmlFor='todo-text'>Todo Text</label>
                <input type="text" id='todo-text' ref={textInputRef} placeholder="add todo"></input>
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
};

// Export the NewTodo component for use in other files.
export default NewTodo;

// Function to add two numbers
const add = (a: number, b: number): number => a + b;

// Use the function to add 3 and 2, then log the result
console.log(add(3, 2));

// Prepare array of hobbies
const hobbies = ['sports','cooking','food'];

// Create a new array of active hobbies, starting with 'Hiking', followed by hobbies spread from the 'hobbies' array
const activeHobbies = ['Hiking', ...hobbies];

// Log the array of active hobbies
console.log(activeHobbies);

// Create a 'person' object with 'name' and 'age' properties
const person = {
    name: 'John',
    age: 24
}

// Use the spread operator to create a copy of the 'person' object
const copiedPerson = {...person }

// Log the age of the copied person and the original person
console.log(copiedPerson.age);
console.log(person.age);

// Function that adds all provided numbers together using the JavaScript 'reduce' function
const addMe = (...numbers: number[]): number => {
    return numbers.reduce((curruntResult, currentValue): number => {
        return curruntResult + currentValue
    }, 0);
};

// Use the function to add together several numbers, then log the result
const addedNumbers = addMe(5, 6, 7, 8, 1);
console.log(addedNumbers);

// Select a button from the document
const button = document.querySelector('button');

// If the button was successfully selected, add an event listener that logs the event object when the button is clicked
if (button) {
    button.addEventListener('click', event => console.log(event));
}

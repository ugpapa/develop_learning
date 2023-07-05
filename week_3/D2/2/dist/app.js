"use strict";
const add = (a, b) => a + b;
console.log(add(3, 2));
const hobbies = ['sports', 'cooking', 'food'];
const activeHobbies = ['Hiking', ...hobbies];
console.log(activeHobbies);
const person = {
    name: 'John',
    age: 24
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson.age);
console.log(person.age);
const addMe = (...numbers) => {
    return numbers.reduce((curruntResult, currentValue) => {
        return curruntResult + currentValue;
    }, 0);
};
const addedNumbers = addMe(5, 6, 7, 8, 1);
console.log(addedNumbers);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
//# sourceMappingURL=app.js.map
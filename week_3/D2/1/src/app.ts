// Define a variable 'appId' and assign it a string 'abc'
let appId = 'abc';

// Select a button from the document, using the non-null assertion operator (!) 
// to ensure that TypeScript treats the selected button as always existing
const button = document.querySelector('button')!;

// Define a function 'add' that takes two numbers as arguments, adds them 
// and returns the result if the sum is more than 0. Otherwise, it doesn't return anything.
function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

// Define a function 'clickHandler' that takes a string 'message' as an argument 
// and logs a concatenation of 'Clicked! ' and the 'message' when called.
function clickHandler(message: string) {
  // The 'userName' variable is not used and therefore commented out
  // let userName = 'Max';
  
  console.log('Clicked! ' + message);
}

// If the button was successfully selected, add an event listener that, when the button is clicked, 
// calls 'clickHandler' with the string "You're welcome!" as its argument
if (button) {
  button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}

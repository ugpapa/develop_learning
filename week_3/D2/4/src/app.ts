// Define 'AddFn' as an interface that describes a function 
// that takes two numbers as parameters and returns a number
interface AddFn {
    (a: number, b: number): number;
  }
  
  // Declare a variable 'add' with the 'AddFn' type
  let add: AddFn;
  
  // Assign a function to 'add' that takes two numbers, adds them together, and returns the result
  add = (n1: number, n2: number) => {
    return n1 + n2;
  };
  
  // Define 'Named' as an interface with optional properties 'name' and 'outputName', 
  // both of which are strings. The 'readonly' modifier means 'name' can't be changed after being set
  interface Named {
    readonly name?: string;
    outputName?: string;
  }
  
  // Define 'Greetable' as an interface that extends 'Named' and includes a 'greet' function 
  // that takes a string as a parameter and doesn't return anything
  interface Greetable extends Named {
    greet(phrase: string): void;
  }
  
  // Define 'Person' as a class that implements 'Greetable'. It has an optional 'name' property,
  // a 'greet' method, and a constructor that takes an optional name parameter
  class Person implements Greetable {
    name?: string;
    age = 30;
  
    constructor(n?: string) {
      if (n) {
        this.name = n;
      }
    }
  
    greet(phrase: string) {
      if (this.name) {
        console.log(phrase + ' ' + this.name);
      } else {
        console.log('Hi!');
      }
    }
  }
  
  // Declare 'user1' with the 'Greetable' type
  let user1: Greetable;
  
  // Assign a new instance of the 'Person' class to 'user1' without a name
  user1 = new Person();
  // The next line of code is commented out. 
  // If uncommented, it would set the 'name' property of 'user1', but it can't because 'name' is read-only
  // user1.name = 'Manu';
  
  // Call the 'greet' method of 'user1' with the phrase 'Hi there - I am'
  user1.greet('Hi there - I am');
  // Log 'user1' to the console
  console.log(user1);
  
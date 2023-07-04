// example 5
// function combine(a: number | string, b: number | string) {

//     let result;
//     if (typeof a === 'number' && typeof b === 'number') {
//         result = a + b;
//     } else {

//         result = a.toString() + b.toString();
//     }

//     return result;
// }

// console.log(combine('Alice', 'Bob'));

// console.log(combine(1, 4));


// example 6

// function combine(
//     input1: number | string,
//     input2: number | string,
//     resultConversion: 'as-number' | 'as-text'
//   ) {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
//       result = +input1 + +input2;
//     } else {
//       result = input1.toString() + input2.toString();
//     }
//     return result;
//   }
  
//   const combinedAges = combine(1, 4, 'as-number');
//   console.log(combinedAges);
  
//   const combinedStringAges = combine('1', '4', 'as-number');
//   console.log(combinedStringAges);
  
//   const combinedNames = combine('Alice', 'Bob', 'as-text');
//   console.log(combinedNames);



// Example 7 : Type alias and object type

type User = { name: string, age: number };
const u1: User = { name: 'Alice', age: 1 };

function greet(user: {name: string, age: number}) {
 console.log('Hi, I am ' +  user.name);
}

greet(u1);

//after simplification

type User1 = { name: string, age: number };

function greet1(user: User1) {
    console.log('Hi, I am'+ user.name);
}

function isOlder(user: User, checkAge: number) {
    return checkAge >= user.age;
}


console.log(isOlder(u1, 18));
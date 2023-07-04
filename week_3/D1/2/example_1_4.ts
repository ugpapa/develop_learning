function add_wit_boolian_string(a: number, b: number, showResult: boolean, result_phrase: string) {

    const result_with = a + b;

    if (showResult) {
        console.log(result_phrase + result_with);
    }

}

var a = 10;
var b = 2.4;
var showResult1 = true;
var result_phrase = "Result is: ";

add_wit_boolian_string(a, b, showResult1, result_phrase);


//example 2 objects

// const product = {
//     id: 'abcd1',
//     print: 14.99,
//     tags: ['great-offer', 'hot-offer'],
//     details: {
//         title: 'Red Edition card',
//         description: 'Red Edition card description new brand'
//     }
// }

// the following code is the types of these objects
// {
//     id: string;
//     price: number;
//     tags: string[];
//     details: {
//       title: string;
//       description: string;
//     }
//   }

//example 3

// const person = {
//     name: 'John',
//     age: 30,
//     hobbies: ['swimming', 'cooking']
// };

// console.log(person.name);

// for (const hobby of person.hobbies) {
//     console.log(hobby);
//     console.log(hobby.toLocaleUpperCase());
// }

//Example 4

enum Role {ADMIN, READ_ONLY, READ_WRITE, AUTHOR, EDIT}

const person = {
    name: 'John',
    age: 30,
    hobbies: ['swimming', 'cooking'],
    role: Role.ADMIN
};


if (person.role === Role.ADMIN) {
    console.log('Admin');
}



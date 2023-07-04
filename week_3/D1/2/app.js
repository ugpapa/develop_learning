// example 5
// function combine(a: number | string, b: number | string) {
var u1 = { name: 'Alice', age: 1 };
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
greet(u1);
function greet1(user) {
    console.log('Hi, I am' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge >= user.age;
}
console.log(isOlder(u1, 18));

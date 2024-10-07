// Reference types:
// 1. Object
// 2. Array
// 3. Function

// ====================
// Object
// ====================
let person = {
	name: 'Jean',
	age: 30,
};

// Dot notation - used when we know the key name
person.name = 'John';

// Bracket notation - used when we don't know the key name
let selection = 'name';
person['name'] = 'Mary';
console.log(person['name']);

selection = 'age';
console.log(person[selection]);

// ====================
// Array
// ====================
let selectedColors = ['red', 'blue'];
selectedColors[2] = 3;
console.log(selectedColors);

// First element
console.log(selectedColors[0]);

// Number of elements
console.log(selectedColors.length);

// ====================
// Function
// ====================
function greet() {
	console.log('Hello World');
}

greet();

// Performing a task
// In the function below, name is a parameter
function greetPerson(name) {
	console.log('Hello ' + name);
}

// John & Mary are arguments
greetPerson('John');
greetPerson('Mary');

// Multiple parameters
function greetPersonFull(firstName, lastName) {
	console.log('Hello ' + firstName + ' ' + lastName);
}

// Omitting the second argument will result in undefined,
// because no argument defaults to undefined
greetPersonFull('John');
greetPersonFull('Mary', 'Berry');

// Calculating and returning a value
function square(number) {
	return number * number;
}

let number = square(2);
console.log(number);
// or
console.log(square(2));

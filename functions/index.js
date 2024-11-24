// Function declaration
function walk() {
	console.log('walking');
} // No semicolon, by convention

// Named function expression
// One object in memory
let run = function run() {
	console.log('running');
}; // Semicolon, by convention

// Anonymous function expression
let jog = function () {
	console.log('jogging');
}; // Semicolon, by convention

run();
jog();

let move = run; // Reference to the run function
move();

// Hoisting
// Hoisting is the process of moving function declarations to the top of the file
// Hoisting happens automatically in JavaScript
// Hoisting only works with function declarations, not function expressions

// Arguments
// JavaScript is a dynamic language
// JavaScript is an interpreted language
// JavaScript is not a compiled language
// JavaScript is not a strongly typed language
// JavaScript is not a statically typed language
// JavaScript is not a type-safe language
// JavaScript is not a case-sensitive language

// Function with only two parameters
function sum(a, b) {
	return a + b;
}
console.log(sum(1, 2)); // 3
console.log(sum(1)); // NaN, because 1 + undefined = NaN

// Function with multiple parameters
function sum2() {
	let total = 0; // Container for the total sum
	for (let value of arguments) {
		// for each value in the arguments object
		total += value; // Add the value to the total
	}
	return total; // Return the total
}
console.log(sum2(1, 2, 3, 4, 5)); // 15

// The Rest Operator - Modern JavaScript
// The rest operator is used to collect all the arguments into an array
function sum3(...args) {
	console.log(args); // [1, 2, 3, 4, 5]
	return args.reduce((a, b) => a + b);
}
console.log(sum3(1, 2, 3, 4, 5, 10)); // 15

// Items in a shopping cart
// The rest operator is used to collect all the items into an array
function totalCost(discount, ...prices) {
	// Rest parameter always comes last
	const total = prices.reduce((a, b) => a + b);
	return total * (1 - discount);
}
// First parameter is the discount - 10% = 0.1
// The rest of the parameters are the prices of the items
console.log(totalCost(0.1, 20, 30)); // 45

// Default Parameters
// Default parameters are used to set default values for parameters
function interest(principal, rate = 3.5, years = 5) {
	return ((principal * rate) / 100) * years;
}
console.log(interest(10000)); // 1750

// Getters and Setters
// Getters are used to get the value of a property
// Setters are used to set the value of a property
const person = {
	firstName: 'Mosh',
	lastName: 'Hamedani',
	get fullName() {
		return `${person.firstName} ${person.lastName}`;
	},
	set fullName(value) {
		const parts = value.split(' ');
		this.firstName = parts[0];
		this.lastName = parts[1];
	},
};

console.log(person.fullName); // Mosh Hamedani
person.fullName = 'John Smith';
console.log(person); // John Smith as an object
console.log(person.fullName); // John Smith as a string

// Try and Catch - Error Handling
const person2 = {
	firstName: 'Mosh',
	lastName: 'Hamedani',
	set fullName(value) {
		if (typeof value !== 'string')
			throw new Error('Value is not a string.');
		const parts = value.split(' ');
		if (parts.length !== 2) throw new Error('Enter a first and last name.');
		this.firstName = parts[0];
		this.lastName = parts[1];
	},
};
// person2.fullName = null; // Error: Value is not a string.
// person2.fullName = ''; // Error: Enter a first and last name.
// person2.fullName = 'John Smith'; // Works

// try {
// 	person2.fullName = '';
// } catch (e) {
// 	alert(e);
// }

// Local vs Global Scope
// Local Scope
function start() {
	const message = 'hi'; // Variable is local to the function
	const color = 'blue'; // Variable is local to the function
	console.log(message, color);
} // message is a local variable

// Global Scope
const color = 'red'; // Variable is global

start();
console.log(color);

// Block Scope
// let and const are block-scoped
function start2() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
	}
	// console.log(i); // ReferenceError: i is not defined
}
start2();
// Avoid using var

// The this Keyword
// this refers to the object that is executing the current function
// this is not always the object that the method is defined in
// this is determined by how a function is called (runtime binding)

// Method -> obj
// Function -> global (window, global)
const video = {
	title: 'a',
	play() {
		console.log(this); // this refers to the video object
	},
};
video.play(); // {title: "a", play: ƒ}

function playVideo() {
	console.log(this); // this refers to the window object
}
playVideo(); // Window

// Constructor Function
function Video(title) {
	this.title = title;
	console.log(this);
}
const v = new Video('Rango'); // Video {title: "Rango"}

const video2 = {
	title: 'Rango',
	tags: ['Animation', 'Five-Star', 'All Ages'],
	showTags() {
		this.tags.forEach(function (tag) {
			console.log(this.title, tag);
		}, this);
	},
};
video2.showTags();

// Changing the value of this
// Call, Apply, and Bind

const video3 = {
	title: 'Rango',
	tags: ['Animation', 'Five-Star', 'All Ages'],
	showTags() {
		const self = this;
		this.tags.forEach(function (tag) {
			// console.log(this.title, tag);
			console.log(self.title, tag); // self is a reference to the video object - bad practice
		});
	},
};
video3.showTags();

// Call Method
function playVideo(a, b) {
	console.log(this);
}
playVideo.call({ name: 'Call' }, 1, 2); // {name: "Call"} - Call method takes arguments as a list
playVideo.apply({ name: 'Apply' }, [1, 2]); // {name: "Apply"} - Apply method takes arguments as an array
playVideo.bind({ name: 'Bind' })(); // {name: "Bind"} - Bind method returns a new function

const video4 = {
	title: 'Rango',
	tags: ['Animation', 'Five-Star', 'All Ages'],
	showTags() {
		this.tags.forEach(
			function (tag) {
				console.log(this.title, tag);
			}.bind(this)
		);
	},
};
video4.showTags();

// Arrow Functions
// Arrow functions do not rebind the this keyword
// Arrow functions inherit the this keyword from their parent
const video5 = {
	title: 'Rango',
	tags: ['Animation', 'Five-Star', 'All Ages'],
	showTags() {
		this.tags.forEach((tag) => {
			console.log(this.title, tag); // this is not rebound - this refers to the video object
		});
	},
};
video5.showTags();

// Exercise: Sum of Arguments
// Create a function that takes a variable number of arguments and returns the sum of those arguments
// sum(1, 2, 3, 4) => 10

function sum4(...items) {
	if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]]; // If the first argument is an array, destructure it
	return items.reduce((a, b) => a + b);
}
console.log(sum4([1, 2, 3, 4])); // 10
console.log(sum4(1, 2, 3, 4)); // 10

// Exercise: Area of Circle
// Create a circle object with a radius property
// circle.radius = 2;
const circle = {
	radius: 1,
	get area() {
		return Math.PI * this.radius * this.radius;
	},
};
console.log(circle.area); // 3.141592653589793

// Exercise: Error Handling

try {
	const count = countOccurrences(null, 1);
	console.log(count);
} catch (e) {
	console.log(e.message);
}

function countOccurrences(array, searchElement) {
	if (!Array.isArray(array)) throw new Error('Invalid array.');
	return array.reduce((accumulator, current) => {
		const occurrence = current === searchElement ? 1 : 0;
		return accumulator + occurrence;
	}, 0);
}
console.log(countOccurrences([1, 1, 2, 3, 4, 1], 1)); // 3

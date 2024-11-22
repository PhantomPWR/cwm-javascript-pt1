// Circle
// let radius = 1;
// let x = 1;
// let y = 1;

// Object Oriented Programming (OOP)
const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1,
	},
	draw: function () {
		console.log('draw');
	},
};

circle.draw(); // Method, a function inside an object

// Factory Function
function createCircle(radius) {
	// Camel Notation
	return {
		radius, // radius: radius - ES6 - key and value are the same
		draw() {
			console.log('draw');
		},
	};
}

const myCircle = createCircle(1);
console.log(myCircle);

const circle2 = createCircle(2);
console.log(circle2);

// Constructor Function
function Circle(radius) {
	// Pascal Notation
	this.radius = radius;
	this.draw = function () {
		console.log('draw');
	};
}

const circle3 = new Circle(1);
console.log(circle3);

// Dynamic Nature of Objects
const circle4 = {
	radius: 1,
};

// Adding a new property
circle4.color = 'yellow';
circle4.draw = function () {};
console.log(circle4);

// Deleting a property
delete circle4.color;
delete circle4.draw;
console.log(circle4);

// Constructor Property - Called by the 'new' operator
const another = new Circle(1);

// Every object has a constructor property
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...

// Functions are Objects

Circle.call({}, 1); // first argument is the target of 'this' keyword

// Value vs Reference Types

// Value (Primitive) Types
// Number
// String
// Boolean
// Symbol (ES6)
// undefined
// null

// Reference Types
// Object
// Function
// Array

// Primitives are copied by their value
let x = 10;
let y = x;

x = 20;

// Objects are copied by their reference
let x1 = { value: 10 };
let y1 = x1;

x1.value = 20;

let number = 10;
function increase(number) {
	number++; // number++ has no effect on the global variable, because the number is a primitive type
}

increase(number);
console.log(number);

let obj = { value: 10 };
function increase(obj) {
	obj.value++; // obj.value++ has an effect on the global variable, because the obj is a reference type
}

increase(obj);
console.log(obj);

// Enumerating Properties of an Object
const circle5 = {
	radius: 1,
	draw() {
		console.log('draw');
	},
};

for (let key in circle5) {
	console.log(key, circle5[key]); // Use bracket notation to access the value of a key
}

// for (let key of circle5) {
// 	console.log(key); // TypeError: circle5 is not iterable
// }
// for...of loop can only be used to iterate over arrays and maps

for (let key of Object.keys(circle5)) console.log(key); // Object.keys() returns an array of keys

for (let entry of Object.entries(circle5)) console.log(entry); // Object.entries() returns an array of key-value pairs

if ('radius' in circle5) console.log('Circle has a radius property'); // in operator checks if a property exists in an object

if (!('color' in circle5)) console.log('Circle does not have a color property');

// Cloning an Object
const circle6 = {
	radius: 1,
	draw() {
		console.log('draw');
	},
};

// Old way
// const anotherCircle = {};
// for (let key in circle6) anotherCircle[key] = circle6[key];
// console.log(anotherCircle);

// New way - ES6 - Object.assign() method
// {} - target object
// circle6 - source object
const anotherCircle = Object.assign({}, circle6);
console.log(anotherCircle);

// Newer way - ES6 - Spread Operator
const anotherCircle2 = { ...circle6 };
console.log(anotherCircle2);

// Adding a new property
const anotherCircle3 = Object.assign(
	{
		color: 'yellow',
	},
	circle6
);
console.log(anotherCircle3);

// Garbage Collection - Memory Management
let circle7 = {};
console.log(circle7);

// JavaScript Built-in Objects
// Math

// Math.random()
const random = Math.random(); // returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(random);

// Math.round()
const round = Math.round(1.9); // rounds to the nearest integer
console.log(round);

// Math.max()
const max = Math.max(1, 12, 3, 24, 5); // returns the maximum number
console.log(max);

// Math.min()
const min = Math.min(1, 12, 3, 24, 5); // returns the minimum number
console.log(min);

// String
// String Primitive
const message = 'This is my first message';
console.log(message);
console.log('type:', typeof message);
console.log('length:', message.length);
console.log('character:', message[0]);
console.log('includes the string "my":', message.includes('my'));
console.log('startsWith "This":', message.startsWith('This')); // case-sensitive
console.log(message.indexOf('my')); // returns the index of the first occurrence of the substring
console.log('original:', message);
console.log(
	'new message with replaced word:',
	message.replace('first', 'second')
); // replaces the first occurrence of the substring

// String Object
const anotherMessage = new String('Hi!');
console.log('type:', typeof anotherMessage);

// Escape Notation
const escapedNewLine = 'This is my first message\nThis is my second message';
console.log(escapedNewLine);

message.split(' '); // returns an array of substrings
console.log(message.split(' '));

// Template Literals
// ES6 - `` - backticks
const messageWithLineBreak = `
This message has
multiple lines
using a template literal
with backticks
Now we can use punctuation marks like ' and "
without escaping them
`;
console.log(messageWithLineBreak);

const firstName = 'John';
const anotherMessage2 = `
Hi ${firstName}, 
the sum of 2 and 3 is: ${2 + 3}`;
console.log(anotherMessage2);

// Date
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9); // month is zero-based, i.e., May is 4
console.log('Date (US):', now.toDateString());
console.log('Date (UK):', now.toLocaleString());
now.setFullYear(2017);
console.log('Modified Date(year):', now.toDateString());

// Exercise 1 - Address Object
const address = {
	street: '1234 Elm Street',
	city: 'Springfield',
	zipCode: '12345',
};

// Object Literal Syntax
const showAddress = (address) => {
	for (let key in address) console.log(key, address[key]);
};
showAddress(address);

// Exercise 2 - Factory and Constructor Functions
// Factory Function - returns a new object
function createAddress(street, city, zipCode) {
	return {
		street, // street: street
		city, // city: city
		zipCode, // zipCode: zipCode
	};
}
const factoryFunctionAddress = createAddress(
	// camel notation
	'1234 Elm Street',
	'Springfield',
	'12345'
);
console.log(factoryFunctionAddress);

// Constructor Function - Pascal Notation
function constructorFunctionAddress(street, city, zipCode) {
	this.street = street;
	this.city = city;
	this.zipCode = zipCode;
}

const constructorAddress = new constructorFunctionAddress(
	'1234 Elm Street',
	'Springfield',
	'12345'
);
console.log(constructorAddress);

// Exercise 3 - Object Equality

let address1 = new constructorFunctionAddress('a', 'b', 'c');
let address2 = new constructorFunctionAddress('a', 'b', 'c');
let address3 = address1; // reference to address1

function areEqual(address1, address2) {
	return (
		address1.street === address2.street &&
		address1.city === address2.city &&
		address1.zipCode === address2.zipCode
	);
}

function areSame(address1, address2) {
	return address1 === address2;
}

console.log(areEqual(address1, address2)); // true - same values
console.log(areSame(address1, address2)); // false - reference to different objects
console.log(areSame(address1, address3)); // true - reference to the same object (address1)

// Exercise 4 - Blog Post Object
const blogPost = {
	title: 'Blog Post Title',
	body: 'Blog Post Body',
	author: 'Joe Bloggs',
	views: 100,
	comments: [
		(comment1 = {
			author: 'John Doe',
			body: 'Comment 1',
		}),
		{
			author: 'Jane Doe',
			body: 'Comment 2',
		},
	],
	isLive: true,
};

// Object Literal Syntax
const showBlogPost = (blogPost) => {
	for (let key in blogPost) console.log(key, blogPost[key]);
};
showBlogPost(blogPost);

// Exercise 5 - Constructor Functions
function BlogPost(title, body, author) {
	this.title = title;
	this.body = body;
	this.author = author;
	this.views = 0;
	this.comments = [];
	this.isLive = false;
}

const blogPost1 = new BlogPost(
	'Blog Post Title',
	'Blog Post Body',
	'Joe Bloggs'
);
console.log(blogPost1);

// Exercise 6 - Price Range Object
let priceRanges = [
	{ label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
	{ label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
	{ label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];

let restaurants = [{ averagePerPerson: 5 }];

// Object Literal Syntax
const showPriceRanges = (priceRanges) => {
	for (let range of priceRanges) console.log(range);
};
showPriceRanges(priceRanges);

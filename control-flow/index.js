// if... else

// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

// if (condition) {
//     statement
// }
// else if (anotherCondition) {
//     anotherStatement
// }
// else if (yetAnotherCondition) {
//     yetAnotherStatement
// }
// else {
//     finalStatement
// }

let hour = 18;

// With curly braces
// if (hour >= 6 && hour < 12) {
// 	console.log('Good morning!');
// } else if (hour >= 12 && hour < 18) {
// 	console.log('Good afternoon!');
// } else {
// 	console.log('Good evening!');
// }

// Without curly braces
if (hour >= 6 && hour < 12) console.log('Good morning!');
else if (hour >= 12 && hour < 18) console.log('Good afternoon!');
else console.log('Good evening!');

// switch... case
let role; // undefined - defaults to Unknown User
role = 'guest';
switch (role) {
	case 'guest':
		console.log('Guest User');
		break;

	case 'moderator':
		console.log('Moderator User');
		break;

	default:
		console.log('Unknown User');
}

// ====================
// Loops
// ====================

// For Loop
// for (initialExpression; condition; incrementExpression) {
//     statement
// }

// i = short for index, called the loop variable
// for (let i = 0; i < 5; i++) {  // 0, 1, 2, 3, 4
for (let i = 1; i <= 5; i++) {
	// 1, 2, 3, 4, 5
	// console.log('Hello World', i);
	// display odd numbers
	if (i % 2 !== 0) console.log('Hello World', i);
}

// Reverse order
for (let i = 5; i >= 1; i--) {
	// 5, 4, 3, 2, 1
	console.log('Hello World', i);
}

// While Loop
let i = 0;
while (i <= 5) {
	if (i % 2 !== 0) console.log(i);
	i++;
}

// Do...while Loop - always executes at least once
let ii = 0;
do {
	if (ii % 2 !== 0) console.log(ii);
	ii++;
} while (ii <= 5);

// Infinite Loop
// let infinity = 0;
// while (true) {
// 	console.log(infinity);
// 	infinity++;
// }

// For...in Loop
const person = {
	name: 'Mosh',
	age: 30,
};
for (let key in person) console.log(key, person[key]);

// For...of Loop
const colors = ['red', 'green', 'blue'];
for (let color of colors) console.log(color);

// Break and Continue
let jj = 0;
while (jj <= 10) {
	// if (jj === 5) break;
	if (jj % 2 === 0) {
		jj++;
		continue; // Uglier way to skip even numbers
	}
	console.log(jj);
	jj++;
}

// ====================
// Exercise
// ====================

// Max of Two Numbers
function maxOfTwoNumbers(num1, num2) {
	console.log(num1 > num2 ? num1 : num2);
	return num1 > num2 ? num1 : num2;
}

maxOfTwoNumbers(6, 8);

// Landscape or Portrait
function isLandscape(width, height) {
	return width > height;
}

console.log(isLandscape(800, 800));

// FizzBuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

function fizzBuzz(input) {
	if (typeof input !== 'number') return NaN;
	if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
	if (input % 3 === 0) return 'Fizz';
	if (input % 5 === 0) return 'Buzz';
	return input;
}

console.log(fizzBuzz(15));

// Demerit Points
// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(180);

function checkSpeed(speed) {
	const speedLimit = 70;
	const kmPerPoint = 5;
	if (speed < speedLimit + kmPerPoint) {
		console.log('OK');
		return;
	}
	const points = Math.floor((speed - speedLimit) / kmPerPoint);
	if (points >= 12) console.log('License suspended');
	else console.log('Points:', points);
}

// Even and Odd Numbers
showNumbers(5);

function showNumbers(limit) {
	for (let i = 0; i <= limit; i++) {
		const message = i % 2 === 0 ? 'Even' : 'Odd';
		console.log(i, message);
	}
}

// Count Truthy
// Falsy Values:
// undefined
// null
// ''
// false
// 0
// NaN

const array = [1, 2, 3];
console.log(countTruthy(array));
function countTruthy(array) {
	let count = 0;
	for (let value of array) if (value) count++;
	return count;
}

// String Properties
const movie = {
	title: 'a',
	releaseYear: 2018,
	rating: 4.5,
	director: 'b',
};

showProperties(movie);

function showProperties(object) {
	for (let key in object)
		if (typeof object[key] === 'string') console.log(key, object[key]);
}

// Sum of Multiples of 3 and 5
console.log(sum(10));

function sum(limit) {
	let sum = 0;

	for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

	return sum;
}

// Grade
const marks = [89, 96, 90];
// Average = 70
// 0-49: F
// 50-59: E
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log('Grade:', calculateGrade(marks));

function calculateGrade(marks) {
	const average = calculateAverage(marks);
	console.log('Average:', average);

	if (average < 50) return 'F';
	if (average < 60) return 'E';
	if (average < 70) return 'D';
	if (average < 80) return 'C';
	if (average < 90) return 'B';
	return 'A';
}

// Average - generic, reusable function
function calculateAverage(array) {
	let sum = 0;
	for (let value of array) sum += value;
	return sum / array.length;
}

// Show Stars
showStars(5);

function showStars(rows) {
	for (let row = 1; row <= rows; row++) {
		let pattern = '';
		for (let i = 0; i < row; i++) pattern += '*';
		console.log(pattern);
	}
}

// Show Primes
// Prime (whose factors are only 1 and itself)
// Composite
// 12 = 1, 2, 3, 4, 6, 12
// Can be divided evenly by its factors

// 11 = 1, 11
// 13 = 1, 13

showPrimes(20);

function showPrimes(limit) {
	for (let number = 2; number <= limit; number++)
		if (isPrime(number)) console.log(number);
}

function isPrime(number) {
	for (let factor = 2; factor < number; factor++)
		if (number % factor === 0) return false;

	return true;
}

// Adding new elements to the array
const numbers = [3, 4]; // const can't be reassigned but the elements in the array can be changed
console.log(`original array: ${numbers}`);

numbers.push(5, 6); // push() method adds elements to the end of an array
console.log(`push(5,6): ${numbers}`);

numbers.unshift(1, 2); // unshift() method adds elements to the beginning of an array
console.log(`unshift(1,2): ${numbers}`);

numbers.splice(2, 0, 'a', 'b'); // splice() method adds elements to the middle of an array
console.log(`splice(2,0,'a','b'): ${numbers}`); // splice(index, deleteCount, elements to add)

// Finding elements (primitives) in an array
const numbers2 = [1, 2, 3, 4];
console.log(`numbers2: ${numbers2}`);
console.log(`not found: ${numbers2.indexOf('a')}`); // returns -1 if the element is not found
console.log(`index of first occurence: ${numbers2.indexOf(1)}`); // returns the index of the first occurrence of the element
console.log(
	`not found: numbers2.indexOf('1')
'1' is a different type: ${numbers2.indexOf('1')}`
); // returns -1 because the type is different

const numbers3 = [1, 2, 3, 1, 4];
console.log(`numbers3: ${numbers3}`);
console.log(`last index of 1: ${numbers3.lastIndexOf(1)}`); // returns the index of the last occurrence of the element

console.log(
	`check if element is found (true/false):
--------
UGLY WAY
--------
index 1 found?: numbers3.indexOf(1) !== -1
index 1 found?: ${numbers3.indexOf(1) !== -1}
index 9 found?: ${numbers3.indexOf(9) !== -1}
----------
PRETTY WAY
----------
index 1 found?: numbers3.includes(1)
index 1 found?: ${numbers3.includes(1)}

Original array: [${numbers3}]
Search with starting index:
numbers3.indexOf(1, 2): ${numbers3.indexOf(1, 2)}
`
); // returns true if the element is found in the array

// Finding elements (reference types) in an array
const courses = [
	{ id: 1, name: 'a' },
	{ id: 2, name: 'b' },
];
const course = courses.find(function (course) {
	return course.name === 'a';
});

// predicate function is a function that returns a boolean value
const courseIndex = courses.findIndex(function (course) {
	return course.name === 'a';
});
console.log(`
courses.includes({ id: 1, name: 'a' }): ${courses.includes({
	id: 1,
	name: 'a',
})}
Returns false because we're objects in two different memory locations

course.name === 'a': ${course.name === 'a'}
index of course.name === 'a': ${courseIndex}
`);

// Arrow functions - ES6 - cleaner and shorter syntax
console.log(`
Arrow functions:
const course = courses.find((course) => course.name === 'a');

Remove parentheses if there's only one parameter:
const course = courses.find(course => course.name === 'a');

If there's no parameter, use empty parentheses:
const course = courses.find(() => course.name === 'a');
`);

// Removing elements from an array
const numbers4 = [1, 2, 3, 4];
console.log(`
Remove elements from an array
Original array: ${numbers4}
`);

// End
const last = numbers4.pop(); // removes the last element of the array
console.log(`
remove last element: ${last}
result: ${numbers4}
`);

// Beginning
const numbers5 = [1, 2, 3, 4];
const first = numbers5.shift(); // removes the first element of the array
console.log(`
remove first element: ${first}
result: ${numbers5}
`);

// Middle
const numbers6 = [1, 2, 3, 4];
const middle = numbers6.splice(2, 1); // removes one element starting from index 2
console.log(`
remove element at index 2: ${middle}
result: ${numbers6}
`);
const numbers7 = [1, 2, 3, 4];
const middleMultiple = numbers7.splice(2, 2); // removes two elements starting from index 2
console.log(`
remove 2 elements starting at index 2: ${middleMultiple}
result: ${numbers7}
`);

// Emptying an array
let numbers8 = [1, 2, 3, 4];
// Original array still exists, but will be removed by the garbage collector
let anotherArray = numbers8; // another is a reference to numbers8
// Original array will not be removed by the garbage collector,
// because anotherArray is a reference to numbers8

// Solution 1 - works if there are no other references to the original array
numbers8 = []; // this works because numbers8 is reassigned to a new array
console.log('Solution 1 - assign empty array:', numbers8);

console.log('New numbers8:', numbers8);
console.log('anotherArray:', anotherArray);

// Solution 2 - truncate the original array
let numbers9 = [1, 2, 3, 4];
let anotherArray2 = numbers9; // anotherArray2 is a reference to numbers9
numbers9.length = 0; // this works because the length of the array is set to 0
console.log('Solution 2 - set length to 0:', numbers9);
console.log('anotherArray2', anotherArray2);

// Solution 3 - splice() method
let numbers10 = [1, 2, 3, 4];
let anotherArray3 = numbers10; // anotherArray3 is a reference to numbers10
numbers10.splice(0, numbers10.length); // splice() method removes all elements from the array
console.log('Solution 3 - splice():', numbers10);
console.log('anotherArray3:', anotherArray3);

// Solution 4 - pop() method NOTE: Causes performance issues with large arrays
let numbers11 = [1, 2, 3, 4];
let anotherArray4 = numbers11; // anotherArray4 is a reference to numbers11
while (numbers11.length > 0) numbers11.pop(); // pop() method removes the last element of the array
console.log('Solution 4 - pop():', numbers11);
console.log('anotherArray4:', anotherArray4);

// Combining arrays - concat() method
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const combined = firstArray.concat(secondArray); // concat() method combines two arrays
console.log(`original firstArray: ${firstArray}`);
console.log(`original secondArray: ${secondArray}`);
console.log(`Combine arrays using concat(): ${combined}`);

// Splitting an array - slice() method
const numbers12 = [1, 2, 3, 4];
const slice = numbers12.slice(2); // slice() method returns a new array starting from index 2
console.log(`original array: ${numbers12}`);
console.log(`slice(2): ${slice}`);

// Spread Operator - ES6 - cleaner and more flexible way to combine arrays
const firstArray2 = [1, 2, 3];
const secondArray2 = [4, 5, 6];
const combined2 = [...firstArray2, ...secondArray2]; // spread operator combines two arrays
console.log(`original firstArray2: ${firstArray2}`);
console.log(`original secondArray2: ${secondArray2}`);
console.log(`Combine arrays using spread operator: ${combined2}`);

// Copying an array - spread operator
const numbers13 = [1, 2, 3];
const copy = [...numbers13]; // spread operator copies an array
console.log(`original array: ${numbers13}`);
console.log(`copy: ${copy}`);

// Iterating an array
const numbers14 = [1, 2, 3];
console.log('using for...let loop:');
for (let number of numbers14) console.log(number); // for...of loop iterates over an array

console.log('using forEach() method:');
numbers14.forEach(function (number) {
	console.log(number);
}); // forEach() method iterates over an array

// Arrow function - ES6 - cleaner and shorter syntax
console.log('using forEach() method with arrow function:');
numbers14.forEach((number) => console.log(number));

// include index
console.log('using forEach() method with index:');
numbers14.forEach((number, index) => console.log(index, number));

// Joining an array
const numbers15 = [1, 2, 3];
const joined = numbers15.join(','); // join() method joins elements of an array into a string
console.log(`original array: ${numbers15}`);
console.log(`join(','): ${joined}`);

// Splitting a string
const message = 'This is my first message';
const parts = message.split(' '); // split() method splits a string into an array
console.log(`original string: ${message}`);
console.log(parts);

const combined3 = parts.join('-'); // join() method joins elements of an array into a string
console.log(`join('-'): ${combined3}`);

// Create URL slug from a string
const title = 'This Is My First Post';
console.log('Original title:', title);
const titleLowerCase = title.toLowerCase();
console.log('Lowercase title:', titleLowerCase);
const slug = titleLowerCase.split(' ').join('-'); // split at spaces and join with hyphens
console.log('URL slug:', slug);

// Sorting an array
const numbers16 = [2, 3, 1];
console.log('original array:', numbers16);
const sorted = numbers16.sort(); // sort() method sorts an array
console.log('sort():', sorted);

const courses2 = [
	{ id: 1, name: 'Node.js' },
	{ id: 2, name: 'JavaScript' },
];

const sortedDefault = courses2.sort(); // sort() method sorts an array
console.log('sort() default:', sortedDefault);

const sortedAlphabetical = courses2.sort(function (a, b) {
	// a < b => -1
	// a > b => 1
	// a === b => 0
	// ASCII character codes are used to compare strings
	const nameA = a.name.toUpperCase(); // ignore upper and lowercase
	const nameB = b.name.toUpperCase(); // ignore upper and lowercase
	if (nameA < nameB) return -1;
	if (nameA > nameB) return 1; // No need for an else statement, because the function will return 0
	return 0;
}); // sort() method sorts an array
console.log('sort() alphabetical:', sortedAlphabetical);

// Testing the elements of an array
const numbers17 = [1, -1, 2, 3];
const allPositive = numbers17.every(function (value) {
	return value >= 0;
}); // every() method tests all elements of an array
console.log('original array:', numbers17);
console.log('every() all positive:', allPositive);

const atLeastOnePositive = numbers17.some(function (value) {
	return value >= 0;
}); // some() method tests at least one element of an array
console.log('some() at least one positive:', atLeastOnePositive);

// Filtering an array
const numbers18 = [1, -1, 2, 3];
const filtered = numbers18.filter(function (value) {
	return value >= 0;
}); // filter() method filters elements of an array
console.log('original array:', numbers18);
console.log('filter() all positive:', filtered);

const filteredArrow = numbers18.filter((value) => value >= 0); // filter() method with arrow function
console.log('filter() all positive with arrow function:', filteredArrow);

// Mapping an array
const numbers19 = [1, -1, 2, 3];
const items = numbers19.map(function (value) {
	return '<li>' + value + '</li>';
}); // map() method maps elements of an array
console.log('original array:', numbers19);
console.log('map() items:', items);

const html = '<ul>' + items.join('') + '</ul>'; // join() method joins elements of an array into a string
console.log('join() html:', html);

// Mapping an array of objects
const numbers20 = [1, -1, 2, 3];
const filtered2 = numbers20.filter((n) => n >= 0);
const items2 = filtered2.map((n) => ({ value: n })); // map() method maps elements of an array
// object literals must be wrapped in parentheses,
// otherwise the curly braces will be interpreted as a block of code
console.log('original array:', numbers20);
console.log('filtered array:', filtered2);
console.log('map() items:', items2);

// Chaining array methods
const numbers21 = [1, -1, 2, 3];
const chained = numbers21
	.filter((n) => n >= 0)
	.map((n) => ({ value: n }))
	.filter((obj) => obj.value > 1)
	.map((obj) => obj.value);

console.log('original array:', numbers21);
console.log('chained array methods:', chained);

// Reducing an array
const numbers22 = [1, -1, 2, 3];
let sum = 0;
for (let n of numbers22) sum += n; // for...of loop iterates over an array
console.log('original array:', numbers22);
console.log('sum:', sum);

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sumReduce = numbers22.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue;
}, 0); // reduce() method reduces elements of an array to a single value
// second parameter is the initial value of the accumulator
console.log('reduce() sum:', sumReduce);

// Second parameter is optional and code can be simplified with an arrow function
const sumReduce2 = numbers22.reduce(
	(accumulator, currentValue) => accumulator + currentValue
);
console.log('reduce() sum with arrow function:', sumReduce2);

// Array from Range
const numbers23 = arrayFromRange(-10, -4);
// (-10, -4) => -10, -9, -8, -7, -6, -5, -4
// (1, 4) => 1, 2, 3, 4
// (1, -4) => []
console.log(numbers23);

function arrayFromRange(min, max) {
	const output = []; // container for the output
	// let i = min; // start from the minimum value
	for (
		let i = min;
		i <= max;
		i++ // as long as i is less than or equal to max, increment i by 1
	)
		output.push(i); // push() method adds elements to the end of an array
	return output; // return the output
}

// Includes
const numbers24 = [1, 2, 3, 4];
console.log('numbers24 includes 1?', includes(numbers24, 1)); // true
console.log('numbers24 includes 5?', includes(numbers24, 5)); // false
function includes(array, searchElement) {
	for (let element of array) if (element === searchElement) return true;
	return false;
}

// Except
const numbers25 = [1, 2, 3, 4, 1, 1];
console.log('Original array:', numbers25);
const output = except(numbers25, [1]); // exclude one or multiple 1 from the array
console.log('all instances of 1 excluded', output);
const output2 = except(numbers25, [1, 2]); // exclude one or multiple 1 and 2 from the array
console.log('all instances of 1 and 2 excluded:', output2);
function except(array, excluded) {
	const output = []; // container for the output
	for (let element of array) // iterate over the array
		if (!excluded.includes(element)) output.push(element); // if the element is not in the excluded array, add it to the output
	return output;
}

// Moving an element
const numbers26 = [1, 2, 3, 4];
console.log('Original array:', numbers26);
const output3 = move(numbers26, 1, 2); // move the element at index 1 to index 2
console.log('Element at index 1 moved to index 2:', output3);
function move(array, index, offset) {
	const position = index + offset; // calculate the new position
	if (position >= array.length || position < 0) {
		// if the position is out of bounds
		console.error('Invalid offset.'); // log an error message if the offset is invalid
		return;
	}
	const output = [...array]; // copy the array with the spread operator
	const element = output.splice(index, 1)[0]; // remove the element at the index and store it in a variable
	output.splice(position, 0, element); // add the element to the new position
	return output; // return the output
}

// Count occurrences
const numbers27 = [1, 2, 3, 4, 1];
const count = countOccurrences(numbers27, 1); // count the occurrences of 1 in the array
console.log('Original array:', numbers27);
console.log('Count of 1:', count);
function countOccurrences(array, searchElement) {
	// let count = 0; // initialize the count to 0
	// for (let element of array) // iterate over the array
	// 	if (element === searchElement) count++; // if the element is the search element, increment the count
	// return count; // return the count
	return array.reduce((accumulator, current) => {
		const occurrence = current === searchElement ? 1 : 0; // if the current element is the search element, set the occurrence to 1, otherwise set it to 0
		return accumulator + occurrence; // add the occurrence to the accumulator
	}, 0); // initial value of the accumulator is 0
}

// Get max
const numbers28 = [1, 2, 3, 4];
console.log('Original array:', numbers28);
const max = getMax(numbers28); // get the maximum value in the array
console.log('Max:', max);
function getMax(array) {
	if (array.length === 0) return undefined; // if the array is empty, return undefined
	// let max = array[0]; // initialize the max to the first element
	// for (let i = 1; i < array.length; i++) // iterate over the array starting from the second element
	// 	if (array[i] > max) max = array[i]; // if the current element is greater than the max, set the max to the current element
	// return max; // return the max
	//return array.reduce((accumulator, current) =>
	// if (current > accumulator) return current;
	// return accumulator;

	// refactored to a ternary operator
	//current > accumulator ? current : accumulator
	//); // reduce the array to the maximum value

	// final refactoring
	return array.reduce((accumulator, current) =>
		current > accumulator ? current : accumulator
	);
}

// Get movies with rating > 4
// Get movies released in 2018
// Sort them by their rating in descending order
// Pick their title
const movies = [
	{ title: 'Movie A', year: 2018, rating: 4.5 },
	{ title: 'Movie B', year: 2018, rating: 4.7 },
	{ title: 'Movie C', year: 2018, rating: 3 },
	{ title: 'Movie D', year: 2017, rating: 4.5 },
];
// Chaining works every time a new array is returned
const titles = movies
	.filter((movie) => movie.rating > 4 && movie.year === 2018)
	.sort((a, b) => a.rating - b.rating)
	.reverse()
	.map((movie) => movie.title);
console.log('Movies:', movies);
console.log('Titles:', titles);

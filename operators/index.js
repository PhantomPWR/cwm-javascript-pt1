// Operators:
// 1. Arithmetic
// 2. Assignment
// 3. Comparison
// 4. Logical
// 5. Bitwise

//  =====================
// Arithmetic Operators
//  =====================
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.3333333333333335
console.log(x % y); // 1
console.log(x ** y); // 1000

// Increment (++)
console.log(++x); // 11 - Pre-increment
console.log(x); // 11
console.log(x++); // 11 - Post-increment
console.log(x); // 12

// Decrement (--)
console.log(--y); // 2 - Pre-decrement
console.log(y); // 2
console.log(y--); // 2 - Post-decrement
console.log(y); // 1

//  =====================
// Assignment Operators
//  =====================
x += 5; // x = x + 5
x -= 5; // x = x - 5
x *= 5; // x = x * 5
x /= 5; // x = x / 5

//  =====================
// Comparison Operators
//  =====================
let z = 1;

// Relational Operators
console.log(z > 0); // true
console.log(z >= 1); // true
console.log(z < 1); // false
console.log(z <= 1); // true

// Equality Operators
// Strict Equality (Type + Value)
console.log(z === 1); // true
console.log('1' === 1); // false - different

// Loose Equality (Value) - doesn't care about the type
console.log(z == 1); // true
console.log(z !== 1); // false

// Ternary Operator
// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type); // gold

// Logical Operators
// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log('Eligible', eligibleForLoan); // true

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
let operand1 = false;
let operand2 = true;
let result = operand1 || operand2;
console.log(result); // true

// Logical NOT (!)
let highIncome2 = false;
let goodCreditScore2 = true;
let eligibleForLoan2 = highIncome2 && goodCreditScore2;
let applicationRefused = !eligibleForLoan2;
console.log('Application Refused', applicationRefused); // false

// Logical Operators with Non-booleans
// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

// Short-circuiting
false || 1 || 2; // 1 - returns the first truthy value

let userColor = 'red'; // let userColor = undefined; - returns default color
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); // red

// Bitwise Operators
// 1 = 00000001 - 8 bits = 1 byte
// 2 = 00000010
// result = 00000011 = 3
console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND

// Read, Write, Execute
// 00000100 - Read
// 00000010 - Write
// 00000001 - Execute

const readPermission = 4; // 00000100
const writePermission = 2; // 00000010
const executePermission = 1; // 00000001
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission); // 6
let message = myPermission & readPermission ? 'yes' : 'no';
console.log(message); // yes

// Operators Precedence
let a = 2 + 3 * 4;
console.log(a); // 14

let b = (2 + 3) * 4;
console.log(b);

// Exercise: Swapping Variables
let color1 = 'red';
let color2 = 'blue';
let tempStorage = color1;
color1 = color2;
color2 = tempStorage;
console.log(color1); // blue
console.log(color2); // red

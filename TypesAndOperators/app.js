// Precedence and Associativity

var a = 2, b = 3, c = 4;

a = b = c; // = has right-to-left associativity;

console.log(a); // 4
console.log(b); // 4
console.log(c); // 4

var d = 3 + 4 * 5; // 23
var e = (3 + 4) * 5; // 35
console.log(d, e);

// Coercion

var f  = 1 + '2'; // 12
console.log(f); 

// Comparison Operators

console.log(1 < 2 < 3); // true
console.log(3 < 2 < 1); // true, because false < 1 is true
console.log(1 < 2 < 0); // false, because true < 0 is false
console.log("" == 0); // true
console.log("" == false); // true
console.log(false == 0); // true
console.log(null < 0); // true
console.log(null == 0); // false

var g = 0;
var h = false;

if (g == h) { // If you use == here, it will return true, === will return false
    console.log("They are equal!");
} else {
    console.log("Nope, not equal.");
}

// Default Values

function greet(name) {
    console.log(`Hello ${name}!`);
}

greet('Carmen'); // Hello Carmen!
greet(); // Hello undefined!  ** undefined is to coerced to String

function defaultGreet(name) {
    name = name || '<Your name here>'; // = has a lower associative precedence than ||
    console.log(`Hello ${name}!`);
}

defaultGreet('Carmen'); // Hello Carmen!
defaultGreet(); // Hello undefined!  ** undefined is to coerced to String

console.log(undefined || "Defined!");  // Defined! because it can be coerced to true
console.log('hi' || 'hello'); // hi because it is the first one that can be coerced to true

// ==========================
// console.log(libraryName); Lib 2 because of the order of the script tags and the original var libraryName declaration

console.log(libraryName); // Lib 1 because of the window.libraryName check in lib2.js
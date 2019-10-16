b(); // Called b!
console.log(a); // undefined

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

var c;
console.log(c); // undefined

if (c === undefined) {
    console.log('c is undefined!');  // will run
} else {
    console.log('c is defined!');
}

c = 'value';

if (c === undefined) {
    console.log('c is undefined!');  
} else {
    console.log('c is defined!'); // will run
}

// console.log(d); // Uncaught ReferenceError: d is not defined

function e() {
    console.log('Called e!');
};

e();

console.log(f); // undefined
var f = 'Hello F!';
console.log(f);

// Stack Creation:
function g() {
    h();
    var i;
}

function h() {
    var j;
}

g();
var j;
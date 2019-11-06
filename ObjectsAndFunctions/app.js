// Objects and the Dot
function objDot() {
    var person = new Object(); // There are better ways to do this, shown below
    person['firstname'] = 'Carmen'; // set a property (primitive)
    person['lastname'] = 'Owen'; // set a property (primitive)

    var prenom = 'firstname';
    console.log(person[prenom]); // Carmen
    console.log(person.prenom); // undefined
    console.log(person.firstname); // Carmen
};
// objDot();

// Objects and Object Literals
function objLit() {
    var literal = {}; // This is an object literal, a shorthand for new Object();
    
    var Carmen = { // this syntax is much easier to write than the objDot example
        firstname: 'Carmen', 
        lastname: 'Owen',
        address: {
            street: '111 Main Street',
            city: 'New York',
            state: 'NY'
        }
    }; 

    function greet(person) {
        console.log(`Hi ${person.firstname}!`);
    };

    greet(Carmen);
    greet({firstname: 'Mary', lastname: 'Doe'}); // you can create objects on the fly

    Carmen.address2 = {
        street: '333 Grand Avenue'
    };
};
// objLit();

function fakeName() {
    var greet = 'Hello!';
    var greet = 'Hola!';
    console.log(greet); // Hola!

    var english = {greet: 'Hello!'};
    var spanish = {greet: 'Hola!'};
    console.log(english.greet); // Hello!
    console.log(spanish.greet); // Hola!

    // english.greetings.greet1 = 'Hello!'; // TypeError undefined: Cannot set property 'greet' of undefined

    english.greetings = {};
    english.greetings.greet2 = "Hi!";
    //  OR
    english.greetings = {greet3: "Howdy!"};
};
// fakeName();

function jsonObjLit() {
    var objLiteral = {
        firstName: 'Mary',
        isAProgrammer: true
    };

    console.log(JSON.stringify(objLiteral));
    var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');
    console.log(jsonValue);
};
// jsonObjLit();

function funcObj() {
    function greet() {
        console.log('Hi.');
    };
    greet.language = 'english';
    console.log(greet);
    console.log(greet.language); // english
    console.log(greet.name); // greet
};
// funcObj();

function stmtExp() {
    function greet() { // this is a statement, it does not result in a value
        console.log('hi');
    };
    var anonymousGreet = function() { // this is an expression, anonymousGreet is being assigned the value of an anonymous function
        console.log('Hi!');
    };
};
// stmtExp();

function valRef() {
    // By Value
    var a = 3; // creates a location in memory with a primitive value
    var b = a; // creates a new location in memory with a copy of the primitive value of a
    a = 6;
    console.log(`a: ${a}, b: ${b}`); // a: 6, b: 3

    // By Reference
    var c = { greeting: 'Hi'}; // creates a location in memory with a reference to an object
    var d = c; // creates a second reference to the same location in memory
    d.greeting = 'Hello';
    console.log(`C: ${c.greeting}, D: ${d.greeting}`) // C: Hello, D: Hello

    function changeGreeting(obj) {
        obj.greeting = 'Hola';
    };
    changeGreeting(c);
    console.log(`C: ${c.greeting}, D: ${d.greeting}`) // C: Hola, D: Hola

    // the equals operator sets up a new memory space
    c = { greeting: 'Howdy'};
    console.log(`C: ${c.greeting}, D: ${d.greeting}`) // C: Howdy, D: Hola
};
// valRef();

// >>>>> Objects, Functions, and 'this' <<<<<
// console.log(this); // window 
// function a() {
//     console.log(this); // window
//     this.newVariable = 'Hello'; // not recommended, can create collisions
// };
// var b = function () {
//     console.log(this); // window
// };
// a();
// console.log(newVariable); // Hello -- available in the global namespace
// b();

// c = {
//     name: 'The c object',
//     log: function() {
//         this.name = 'Updated c object';
//         console.log(this);
//     }
// };
// console.log(c.name); // The c object
// c.log(); // {name: "Updated c object", log: ƒ}
// console.log(c.name); // Updated c object

// d = {
//     name: 'The d object',
//     log: function() {
//         this.name = 'Updated d object';
//         console.log(this); // {name: "Updated d object", log: ƒ}
//         var setName = function(newName) {
//             this.name = newName; // 'this' here refers to the global object, and is considered by many to be a bug in JavaScript
//         };
//         setName('Updated the d object in the setName function!');
//         console.log(this); // {name: "Updated d object", log: ƒ}
//     }
// };
// console.log(d.name); // The d object
// d.log(); 
// console.log(d.name); // Updated d object
// console.log(window.name); // Updated the d object in the setName function!

// e = {
//     name: 'The e object',
//     log: function() {
//         var self = this; // since e is an object, self points to the same place in memory as 'this'

//         self.name = 'Updated e object';
//         console.log(self); // {name: "Updated e object", log: ƒ}
//         var setName = function(newName) {
//             self.name = newName; // 'self' here refers to 'this' as it was on line 162
//         };
//         setName('Updated the e object in the setName function with self!');
//         console.log(self); // {name: "Updated the e object in the setName function with self!", log: ƒ}
//     }
// };
// console.log(e.name); // The e object
// e.log(); 
// console.log(e.name); // Updated the e object in the setName function with self!!
// console.log(window.name); // Updated the d object in the setName function!

// >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<

function arrAny() {
    var arr = [
        1, 
        false, 
        {
            name: "Carmen",
            address: '111 Main Street'
        },
        function(name) {
            var greeting = 'Hello';
            console.log(`${greeting} ${name}!`)
        },
        "hello"
    ];
    console.log(arr);
    arr[3](arr[2].name);
};
// arrAny();

function argSpread() {
    function greet(firstname, lastname, language = "English") { // not yet available in all browsers, the safer way is setting the default value using ||
        console.log(firstname);
        console.log(lastname);
        console.log(language);
        console.log(arguments); // returns an object with any defined arguments as the first values, does not include 'English'
        console.log('-----------');
    };
    greet(); // undefined undefined English
    greet('John'); // John undefined English
    greet('John', 'Doe'); // John Doe English
    greet('John', 'Doe', 'Basque'); // John Doe Basque
    
    function greetAgain(firstname, lastname, language = "English") { 
        if (arguments.length === 0) {
            console.log('Missing Parameters!');
            console.log('-----------');
            return;
        }
        console.log(firstname);
        console.log(lastname);
        console.log(language);
        console.log(arguments); // returns an object with any defined arguments as the first values, does not include 'English'
        console.log('-----------');
    };
    greetAgain(); // Missing Parameters! -- note the default 'English' does not affect the length
    greetAgain('John'); // John undefined English
    greetAgain('John', 'Doe'); // John Doe English
    greetAgain('John', 'Doe', 'Basque'); // John Doe Basque
    
    function spreadGreet(firstname, lastname, language = "English", ...other) { // 'other' can be any variable name you wish
        console.log(arguments);  // 'John', 'Doe', 'Basque', '111 Main Street', 'New York'
        console.log(other); // '111 Main Street', 'New York'
        console.log(typeof other); // object (but array-like)
    };
    spreadGreet('John', 'Doe', 'Basque', '111 Main Street', 'New York'); // John Doe Basque
};
// argSpread();

function funcOverload() { // This is just one example of a pattern which can replace overloading
    function greet(firstname, lastname, language) {
        language = language || 'English';

        if (language === 'English') {
            console.log(`Hello ${firstname} ${lastname}!`);
        } 
        if (language === 'Español') {
            console.log(`Hola ${firstname} ${lastname}!`);
        } 
    };
    
    function greetEnglish(firstname, lastname){
        greet(firstname, lastname, 'English');
    };

    function greetSpanish(firstname, lastname){
        greet(firstname, lastname, 'Español');
    };

    greetEnglish('John', 'Doe');
    greetSpanish('Tony', 'Alicea');
};
// funcOverload();

function synParse() {
    function getPerson() {

        return // the engine inserts a ; here because of the carriage return character
        {
            firstname: 'Carmen'
        }
    }
    console.log(getPerson()); // undefined
};
// synParse();

function whtSpace() {
    var 
        // first name of the person
        firstname,
        //last name of the person
        lastname,
        // the language
        // can be English or Español
        language;

    language = 'Español';
    console.log(language);
};
// whtSpace();

function IIFE() {
    var greeting = function(name) {
        console.log(`Hello, ${name}!`);
    }('Mary'); // Hello, Mary!

    var returnGreet = function(name) {
        return `Hello, ${name}!`;
    }('John');
    console.log(returnGreet); // Hello, John!
    // console.log(returnGreet()); // Uncaught TypeError: returnGreet is not a function

    (function(name) { // this is a classic IIFE
        let greeting = 'Hello';
        console.log(`${greeting}, ${name}!`)
    }('Carmen'));
};
// IIFE();

// var greeting = 'Hola';
// console.log(greeting); // Hola
function iifeSafe() {    
    (function(global, name) { 
        let greeting = 'Hello';
        global.greeting  = 'Howdy!'
        console.log(`${greeting}, ${name}!`);  // Hello, Carmen!
    }(window, 'Carmen'));
};
// iifeSafe();
// console.log(greeting); //Howdy

function closuresI() {
    function greet(whatToSay) {
        return function(name) {
            console.log(`${whatToSay} ${name}`);
        };
    };

    // greet('Hi') returns a function, which is immedaitely invoked with ('Tony')
    greet('Hi')('Tony'); 

    // Does the same as greet('Hi')('Tony');
    var sayHi = greet('Hi');
    sayHi('Maria');
};
// closuresI();

function closuresII() {
    function buildFunctions() {
        var arr = [];

        for (var i = 0; i < 3; i++) { // if you use let instead of var here, you get 0 1 2 instead of 3 3 3
            arr.push(
                function() {
                    console.log(i);
                }
            );
        }
        return arr;
    };

    var funcs = buildFunctions();
    funcs[0](); // 3
    funcs[1](); // 3
    funcs[2](); // 3
    
    function buildFunctions2() {
        var arr = [];

        for (var i = 0; i < 3; i++) { 
            arr.push(
                (function(j) {
                    return function() {
                        console.log(j);
                    }
                }(i))
            );
        }
        return arr;
    };

    var funcs2 = buildFunctions2();
    funcs2[0](); // 0
    funcs2[1](); // 1
    funcs2[2](); // 2
};
// closuresII();

function funcFactories() {
    function makeGreeting(language) {
        return function(first, last) {
            if (language === 'English') {
                console.log(`Hello, ${first} ${last}!`);
            }
            if (language === 'Español') {
                console.log(`Hola, ${first} ${last}!`);
            }
        }
    };
    var greetEng = makeGreeting('English'); // this closure includes both the space in memory for var language = 'English' and that for the function greetEng
    var greetEsp = makeGreeting('Español');  // this closure includes both the space in memory for var language = 'Español' and that for the function greetEsp
    
    greetEng('Carmen', 'Owen');
    greetEsp('Carmen', 'Owen');
};
// funcFactories();

function closuresAndCbs() {
    function sayHiLater() {
        var greeting = 'Hi!';
        setTimeout(function() {
            console.log(greeting);
        }, 3000);
    };
    sayHiLater();

    function tellMeWhenDone(callback) {
        var a = 1000;
        var b = 2000;

        callback();
    };
    tellMeWhenDone(function() {
        console.log('I am done!');
    });
    tellMeWhenDone(function() {
        console.log('Calling you back....');
    });
};
// closuresAndCbs();
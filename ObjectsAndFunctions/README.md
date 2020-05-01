# Objects and Functions (Section 4)

> Objects and the Dot
  * Objects are collections of name-value pairs
  * An object can have properties which are primitives, properties which are reference types, or functions (which are called methods when they are values on an object)
  * The brackets in bracket notation are called the 'computed member access operator.'  The dot in dot notation is called the 'member access operator.'

> Faking Namespaces
  * JavaScript doesn't have namespaces like some other languages use.  To prevent collisions, however, you can use objects.
  * Trying to set english.greetings.greet as on line 51 of app.js returns the error because of the left-right associative nature of the dot, you are essentially trying to assign a value to undefined.greet

> JSON and Object Literals
  * In years previous, data was sent over the internet in various formats.  For a while, the accepted format was XML.
  * XML has a lot of unnecessary characters and it slowed download time.
  * JavaScript Object Notation was agreed to have a lighter syntax, the data became just a string
  * Property names have to be wrapped in double quotes in order to be parsed
  * So even though JSON is not really part of JavaScript., they interact very easily, specifically with the built in functions .stringify and .parse
  * JSON does not accept functions as values, despite its similar appearance to JavaScript Objects.

> Functions are Objects
  * The term 'first class functions' means that everything you can do with other types, you can do with functions.  Assign them to variables, pass them around, create them on the fly, etc.
  * You can attach primitives, objects, or other functions to functions.
  * Even the name is optional, you can create anonymous functions.
  * The code you write is placed into memory as just one property of the function object, this is the invocable property of the function object.

> Function Statements and Function Expressions
  * A Function Expression is a unit of code which results in a value. 
  * a = 3; 1 + 2; a = {num: 1} are all expressions.
  * A Statement just does work, it is the expression which returns the value.
  * A function expression results in an object being created during the execution phase.
  * Function expressions cannot be hoisted, though function statements can.  This is because of the Execution Context -- remember that all variables in JavaScript are initially set to undefined as a placeholder, functions sit in memory in their entirety.

> By Value vs. By Reference
  * All primitive types are by value.
  * All objects including functions are by reference.
  * Mutation:
        - reference types can be mutated even as parameters in functions (lines 106-110).
        - reassigning a variable using the = operator will create a new reference in memory, instead of mutating the original one (lines 112-114).

> Objects, Functions, and 'this'
  * Reminder:  when a function is invoked, a new execution context is created.
  * Every time a new execution context is created, the keyword 'this' is created, as an object.
  * In the case where the function is actually a method attached to an object, the 'this' keyword refers to the object in which that method sits.
  * var self = this (function e) is a common convention for solving for behavior related to 'this' (function d).

> Arrays:  Collections of Anything
  * In most programming languages, arrays can only hold one type at a time.
  * In JavaScript, dynamic typing allows multiple types to exist in the same array.

> Arguments and Spread
  * The concept of arguments in general is just another name for the parameters you pass to your functions
  * The keyword arguments, however, is unique to JavaScript.
  * arguments returns an array-like object, not an array, but some basic properties like arguments.length, arguments[0] still apply.
  * The arguments object is a local variable available within all non-arrow functions.

> Function Overloading
  * Function Overloading is a concept in other programming languages.  JavaScript offers several patterns as alternatives.

> Syntax Parsers
  * Automatic Semicolon Insertion
        - semicolons are optional in core JavaScript, because it reads the code one character at a time and knows what to expect in most situations (return, break, closing ) or }, etc.)
        - carriage returns are invisible characters, so the syntax parser sees it and in some cases says, you are not allowed to go to the next line with this particular type of syntax, so it inserts automatically a semicolon for you.
        - this is why you should insert your own semicolons, to minimize the chance that the engine misinterprets your code.
  * Whitespace
        - invisible characters that create literal space in your written code (carriage returns, tabs, spaces)
        - comments are completely ignored, and in some cases, carriage returns are not breaking.

> IIFEs and Safe Code 
  * Function statements and function expressions have to be invoked in order to run.
  * An Immediately Invoked Function Expression is called as soon as it is written (lines 291-293);
  * They can also employ return statements as in lines 294-297.  In this case, returnGreet is equal to string value, not the function itself.  The function is invoked with ('John'), and the returned value is what is assigned to returnGreet.  Hence the console.log syntax.
  * This works with function expressions only, not function statements.
  * Parentheses in JavaScript are an operator.  The engine assumes that anything inside parentheses is an expression, so you can trick the syntax parser into seeing a function expression without assigning it to a variable name (lines 301-304).
  * This is a classic IIFE, and can be very useful
  * When an anonymous function is enclosed in parentheses and immediately invoked, the following occurs:
        - Global Execution Context creates a space in memory for the anonymous function
        - An execution context for that function goes onto the stack
        - Any variables created within that function are part of that EC
  * This ensures that any code (variables, etc.) inside those parentheses will not collide with the global scope, meaning that the code is safe.
  * You can pass a reference to the global object into these encapsulated function expressions, as in lines 308-318.

> Closures I
  * When code like that within the closuresI function in app.js is invoked, the following occurs:
        - the greet function is invoked and its execution context is created, including the variable whatToSay = 'Hi';
        - that execution context is popped off of the stack, but the memory instance remains
        - then the returned function within greet() is invoked and name is given a value within that execution context.
        - that second function includes a reference to whatToSay, which still exists in memory and can be found by the engine despite having left the stack, the engine just goes up the scope chain as usual.
  * Any functions created inside the execution context of a function like greet() will still have a reference to its values in memory, even after the EC is gone.
  * The EC has closed in its outer variables, and this is called a closure.  It doesn't matter when we invoke a function, it will have access to the variables that it should have access to, its scope will remain intact.

> Closures II
  * When the for loop in closuresII() finishes, the final value assigned to var 1 is 3, that's what triggered the for loop to end.  
  * That means that the reference in memory to the value of var i is 3.
  * The code inside the anonymous function in the for loop which is being invoked with funcs[0]() et al is just console.log(i), so when the engine looks back up the scope chain, the value it finds is 3, in all cases.
  * let is different from var in that it is scoped to the block.  Every time the for loop runs, the value of let i will have a new place in memory with its unique value.
  * Without using let, you have to create a parent scope for each invocation, such as the IIFE used in buildFunctions2().  While this does work in cases when ES6+ is not an option, let is a much cleaner solution.

> Closures and Callbacks
  * setTimeout and jQuery are examples of the use of closures.
  * setTimeout uses a function expression to reference the values it needs inside the closure, so that when the code does execute, it can still find the reference in memory to var greeting = 'Hi' as in the function closuresAndCbs in app.js.
  * jQuery employs the same utility in, for example, code such as $('button").click(), which takes a function expression a parameter.
  * A callback is a function you give to another function, to be executed when the other function is finished.  So the function you call, 'calls back' by calling the function you gave it to run when it finishes.

> Call, Apply, and Bind
  * All functions in JavaScript have access to some special built in functions:  call(), apply(), and bind(), which all involve keyword this.
  * These functions are properties on the function object, hence the use of .bind(), .call(), etc.
  * .bind():
        - using bind returns a new function-- it makes a copy of the function it is called on, and the object which is passed as an argument is what 'this' will refer to for that copy.
  * .call():
        - .call() calls the function the same way as logName() would, except it accepts an argument the same way as .bind()
  * .apply():
        - works almost exactly like .call(), but expects parent function arguments to be in an array, as on line 455
  * Function Borrowing can be done with both call and apply, as on line 462.  You can call a function that is a property of one object, but assign the values of another object to be its reference via 'this'
  * Function Currying uses .bind() to copy the function, set the reference, and also set one or more parameters to a default value, as on lines 470-473

> Functional Programming
  * Lines 504-509
        - checkPastLimit wants two parameters, but the function inside of mapForEach (fn) accepts only one
        - in order to take advantage of mapForEach, you can use .bind()
        - passing 'this' satisfies the expectations of bind(), but doesn't really change anything
        - passing the second argument (1), assigns the limiter value (line 508)
        - the copy you just made of checkPastLimit is then passed into mapForEach as the fn argument
        - fn(arr[i]) then assigns the value of arr[i] to item, since limiter has already been set
  * Lines 511-518
        - simpleCheckLimit returns another function
        - bind is used to set the default value of limiterB to that of limiterA
        - the returned function (lines 512-513) is what is passed to the fn parameter of mapForEach, and item is given the value of arr1[i]
  * Try to either mutate data early in your code, or not mutate it at all (i.e. return new objects, as with map())
  * Underscore.js [annotated source code](https://underscorejs.org/docs/underscore.html) is a good resource for learning about functional programming concepts. 

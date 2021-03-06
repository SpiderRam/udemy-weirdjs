# Execution Context (Section 2)

> Syntax-Parser:  a program that reads your code and determines what it does, and if its grammar is valid. Works with compilers and translators to turn code into computer instructions.

> Lexical Environment:  where something sits physically in the code that you write, and what surrounds it.

> Execution Context:  a wrapper to help manage the code that is running.
  * The Global Execution Context creates the Global Object, and the keyword this.
  * Code that is not inside a function is on the global object.
  * This can be demonstrated by typing this in the console when running an empty JavaScript file from `<script src="app.js"></script>`
  * Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}

> Name/Value Pair:  a name that maps to a unique value.  The name may be defined more than once, but can only have one value in any given context.  That value may be more name/value pairs.

> Object:  a collection of Name/Value Pairs.

> Creation and Hoisting: the Execution Context is created in two phases. 
  * The Creation Phase 
        - Global Object
        - this
        - Outer Environment
        - Set up memory space for variables and functions ("hoisting")
        - Hoisting:  the JavaScript engine has already set aside memory space for all your variables and functions, so it can access them when the code runs, but it does not 'move' code to the top of a file during compilation, and it doesn't necessarily know the eventual value of a declared variable.  All variables in JavaScript are initially set to undefined as a placeholder, functions sit in memory in their entirety. Do not rely on hoisting, it can yield unexpected results.  
        - Also, note that 'undefined' is not the same as not defined, it has a specific meaning in JavaScript. 'Uncaught ReferenceError: d is not defined' will show when a variable is used for which no space has been created in memory.
        - It is very bad practice to ever set a variable equal to undefined.
  * The Execution Phase
        - This phase runs your code line by line, turning it into code the computer can understand.
        - JavaScript is single threaded, meaning one command is being executed at a time, at least from our perspective as programmers.
        - And unless directed otherwise, JavaScript is synchronous, meaning it executes in the order in which it is written.

> Invocation:  running a function.
  * Every time a function is called, a new execution context is created, and goes on top of the 'stack.'
  * The Global Execution Context is at the bottom of the stack.  g() goes on the stack next, and then invokes h(), which goes on top of g().  h has to finish and leave the stack before g can do the same.

> Variable Environments: where the variables live, and how they relate to each other.  Every execution context has its own variable environment and memory space.

> Scope: where a variable is available in your code. 
  * Block Scoping 
        - blocks are defined by curly braces
        - let and const allow JavaScript to use block scope 

> Scope Chain:  every execution environment has a reference to its outer environment.  Hence the importance of the lexical environment.  

> Asynchronous Callbacks: 
  * In addition to the JavaScript engine, other things like the rendering engine and http request in the browser are running in the background.  
  * The Event Queue contains notifications of events that may be happening, such as click events, http requests, and many more-- events that are happening outside of the JavaScript Engine.  The EQ is processed only when the stack is empty.  The browser adds events to the queue asynchronously, but JavaScript runs synchronously, by design.
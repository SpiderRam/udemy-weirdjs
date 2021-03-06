# Types and Operators (Section 3)

> Dynamic Typing: you don't tell the JavaScript engine what type of data a variable holds, it figures it out while your code is running.

> Primitive Types:  a type of data that represents a single value-- in other words, a value that isn't an object.
  * undefined-- represents a lack of existence (this type should never be be assigned by a developer)
  * null-- represents a lack of value (can be assigned by a developer)
  * boolean-- true or false
  * number-- there is only one number type (floating point), unlike other languages, which can make math weird
  * string-- a sequence of characters (both single and double quotes are valid)
  * symbol (new in ES6)-- not fully supported by all browsers

> Operators: special functions that are syntactically different than other functions in your code.
  * The familiar characters +, -,  *, / are actually functions.  So are >, <, =, and the combinations you make with them.

> Operator Precedence & Associativity:
  * Operator Precedence:  which operator function gets called first when there is more than one in the same line of code.
  * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) 
  * Associativity:  what order operator functions get called in (left-to-right or right-to-left).

> Coercion:  converting a value from one type to another.  This happens pretty often in JavaScript because it is dynamically typed.
  * In memory, 1 and '1' look nothing alike.  
  * Given 1 + '1', JavaScript will coerce the number into a string, and return 11.

> Comparison Operators
  * In the example 3 < 2 < 1, < has left to right associativity, so 3 < 2 runs first and returns false.  Then the second operation is actually false < 1.
  * In JavaScript, false takes a value of zero when coerced from boolean to number
  * This can be observed in the console by running Number(false), which will return 0
  * Number(null) returns 0 also, but Number(undefined) will return NaN.
  * false == 0 returns true, but null == 0 returns false, even though null < 1 returns true.
  * These oddities of coercion are why it is best practice to use === or !==, which checks type as well as value-- strict equality and strict inequality.
  * MDN provides a [chart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) to check these values

> Existence and Booleans
  * Boolean(undefined), Boolean(null), Boolean(NaN), and Boolean("") all return false, because of the inferred lack of existence.

> Default Values
  * The || operator doesn't just return true or false, it returns the values that can be coerced to true.
  * Using || to check the global namespace before assigning a value can prevent collisions (see lib1 and lib2)
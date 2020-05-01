const _ = require('underscore')

function proto() {
    // This doesn't work well in node, but when you type this into the dev tools console,
    // you can see the built-in methods and properties available on the __proto__ of each
    var obj1 = {name: 'Udemy'};
    console.log(obj1.__proto__);
    console.log(obj1.constructor.length); // 1
    console.log(obj1.constructor.keys.name); // returns 'keys' even in dev tools
    console.log(obj1.name); // returns 'Udemy'
    var obj2 = {name: 'JavaScript'};
    console.log(obj2.__proto__);
    console.log(obj2.constructor.length); // 1
    console.log(obj2.constructor.keys.name);
    var obj3 = {
        name: 'Weird',
        constructor: 'property'
    };
    console.log(obj3.__proto__);
    console.log(obj3.constructor.length); // 8
    console.log(obj3.__proto__.constructor.keys.name); // 'keys'
    // console.log(obj3.constructor.keys.name); // Error:  cannot read 'keys' of undefined

    var person = {
        firstname: 'Default',
        lastname: 'Default',
        middlename: 'Default',
        getFullName() {
            return `${this.firstname} ${this.lastname}`
        }
    };

    var john = {
        firstname: 'John',
        lastname: 'Doe'
    };

    // Never ever do this, this is for explanation purposes only
    // This can slow down your application dramatically

    john.__proto__ = person; // john now inherits from person
    console.log(john.getFullName());
    console.log(john.firstname); // finds firstname on the john object first, stops before it gets to 'Default' -- 'this' refers to the object that originated the call
    console.log(john.middlename); // does not find a middlename property on john, so moves down the prototype chain until it finds 'Default'

    var jane = {firstname: 'Jane'};
    jane.__proto__ = person;
    console.log(jane.getFullName()); // Jane Default
};
// proto();

function omniaObj() {
    // This doesn't work well in node, but when you type this into the dev tools console,
    // you can see the built-in methods and properties available on the __proto__ of each
    var a = {};
    var b = function () { };
    var c = [];

    console.log(a.__proto__); // {} base object, the bottom of the prototype chain
    console.log(b.__proto__); // function (Empty)
    console.log(c.__proto__); // function (Empty)
}
// omniaObj();

function refEx() {
    var person = {
        firstname: 'Default',
        lastname: 'Default',
        middlename: 'Default',
        getFullName() {
            return `${this.firstname} ${this.lastname}`
        }
    };

    var john = {
        firstname: 'John',
        lastname: 'Doe'
    };

    // Again, never ever do this, this is for explanation purposes only

    john.__proto__ = person; // john now inherits from person
    for (const prop in john) {
        /**
         * @returns {
         * firstname: John
         * lastname: Doe}
         */
        if (john.hasOwnProperty(prop)) {
            console.log(prop + ': ' + john[prop])
        }

        /**
         * @returns {
         * firstname: John
         * lastname: Doe
         * middlename: Default
         * getFullName: getFullName() {
         * return `${this.firstname} ${this.lastname}`}
         * }
         */
        console.log(prop + ': ' + john[prop]);
    }

    var jane = {
        address: '111 Main St.',
        getFormalFullName: function () {
            return this.lastname + ', ' + this.firstname
        }
    }
    var jim = {
        getFirstName: function () {
            return firstname;
        }
    }

    _.extend(john, jane, jim)

    /**
     * @returns {
     * firstname: 'John'
     * lastname: 'Doe'
     * address: '111 Main St.'
     * getFormalFullName: [Function: getFormalFullName]
     * getFirstName[Function: getFirstName]}
     */
    console.log(john);
    
    /**
     * @returns {
     * address: '111 Main St.'
     * getFormalFullName: [Function: getFormalFullName]
     */
    console.log(jane)
}
// refEx();

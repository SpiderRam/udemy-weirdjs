function proto() {
    var obj = {name: 'Udemy'};
    console.log(obj.__proto__);
    console.log(obj.constructor.length); // 1
    console.log(obj.constructor.keys.name);
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
    console.log(john.firstname); // finds firstname on the john object first, stops before it gets to 'Default'
    console.log(john.middlename); // does not find a middlename property on john, so moves down the protoype chain until it finds 'Default'

    var jane = {firstname: 'Jane'};
    jane.__proto__ = person;
    console.log(jane.getFullName()); // Jane Default
};
proto();
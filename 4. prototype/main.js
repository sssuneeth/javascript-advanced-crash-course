/**
 * Prototype
 * ---------
 * All JavaScript objects inherit properties and methods from a prototype.
 * */

function Person(fName, lName) {
	this.fName = fName;
	this.lName = lName;
}

const person1 = new Person('Suneeth', 'S');
const person2 = new Person('Navaneeth', 'S');

// this adds a greet method to Person constructor
Person.prototype.greet = function() {
	return `Hello ${this.fName} ${this.lName}`;
}

console.log(person1.greet());
// >>> Hello Suneeth S
console.log(person2.greet());
// >>> Hello Navaneeth S
/**
 * New Binding
 * -----------
 * A new keyword is used to create an object from the constructor function.
 * A new keyword is used to create an object from the constructor function.
 * */

class Person {
	constructor(name, age) {
		// creates a empty object like this={}
		this.name = name;
		this.age = age;
		this.log = function() {
			console.log(`${this.name} is ${this.age} years old`);
		}
	}
}

/** and newly createed empty this in the constructor function binds to the object created using this keyword
* which is person1
* person1 has properties such as
* name
* age
* log
*/
const person1 = new Person('Suneeth', 17);
person1.log()
// >>> Suneeth is 17 years old
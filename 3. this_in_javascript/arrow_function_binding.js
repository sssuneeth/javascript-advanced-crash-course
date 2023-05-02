/**
 * Arrow Function Binding
 * ----------------------
 * When this is used in the arrow function then this has lexical scope so without the 
 * function keyword this is unable to refer to the object in the outer scope. 
*/

const person = {
	name: "John",
	age: 26,
	greet: () => {
		return `Hello you're ${this.age} years old`
	}
}

console.log(person.greet())
// it returns a undefined
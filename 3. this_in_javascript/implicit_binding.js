/** Implicit binding 
 * -----------------
 * When we call a function as a method of the object this keyword refers to the calling object
*/

const person = {
    name: "FooMan",
    age: 18,
    greet: function() {
        return `Hello ${this.name}, you're ${this.age} years old`;
    }
}

console.log(person.greet());
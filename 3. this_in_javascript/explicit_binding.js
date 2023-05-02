/**
 * Explicit binding
 * ----------------
 * When we explicitly bind this keyword using the call(), bind(), or apply() 
 * method then this keyword default reference is changed to the object called using the above-specified methods.
*/

function verifyAge() {
    let age = this.age;

    if (age > 18) {
        console.log("You can drive");
    } else {
        console.log("You can't drive");
    }
}

const person = { age: 22 };

verifyAge.call(person);
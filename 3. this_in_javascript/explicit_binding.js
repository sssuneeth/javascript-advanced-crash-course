/**
 * Explicit binding
 * ----------------
 * When we explicitly bind this keyword using the call(), bind(), or apply() 
 * method then this keyword default reference is changed to the object called using the above-specified methods.
*/

function verifyAge(car) {
    let age = this.age;

    if (age > 18) {
        console.log(`You can drive ${car}`);
    } else {
        console.log(`You can't drive ${car}`);
    }
}

const person = { age: 22 };
const car = "Supra";
// call method
// in this method we need to pass arguments one by one
verifyAge.call(person, car);
// apply method
// in this method we can pass any type of arguments
verifyAge.apply(person, car);
// bind method
// bind method returns a new funtion that need to invoke
// in this method we need to pass arguments one by one
const newVerifyFunc = verifyAge.bind(person, car);
newVerifyFunc();
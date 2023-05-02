/**
 * Default binding
 * ---------------
 * When this keyword is used in global scope this is set to window object.
 * It retuns undefined since there is no age variable.
*/

let age = 20;
function verifyAge() {
    return this.age;
}

console.log(verifyAge())
// this returns undefined
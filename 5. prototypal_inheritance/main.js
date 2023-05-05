/**
 * Prototypal Inheritance
 * ----------------------
 * We use a JavaScript prototype to add new properties and methods to an existing object constructor.
 * */

function User(name, age) {
	this.name = name;
	this.age = age;
}

function Admin(name, age) {
	// this = {}
	User.call(this, name, age);
	this.isAdmin = true;
	/**
	 * another way
	 * @example
	 * __proto__: User
	 * */
}
// by this we add new proprties and method to Admin from User
// this is recommented
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

const user1 = new Admin('Suneeth', 17);
console.log(user1.name);
// >>> Suneeth
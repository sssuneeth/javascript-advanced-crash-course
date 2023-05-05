/**
 * Prototypal Inheritance
 * ----------------------
 * */

function User(name, age) {
	this.name = name;
	this.age = age;
}

function Admin(name, age) {
	// this = {}
	User.call(this, name, age);
	this.isAdmin = true;
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

const user1 = new Admin('Suneeth', 17);
console.log(user1.name);
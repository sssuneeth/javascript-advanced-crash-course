/**
 * Class Inheritance
 * -----------------
 * Inheriting using class construnctor
 * */

class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	userBio() {
		console.log(`${this.name} is ${this.age} years old`)
	}
}

const user1 = new User('Suneeth', 17);
user1.userBio();
// >>> Suneeth is 17 years old

// extends keyword inherits User to Admin class
class Admin extends User {
	constructor(name, age) {
		super(name, age);
		this.isAdmin = true;
	}
}

const user2 = new Admin('Monu', 19);
user2.userBio();
// >>> Monu is 19 years old
console.log(user1, user2);
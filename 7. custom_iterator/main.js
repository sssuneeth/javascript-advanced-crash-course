/**
 * Custom Iterator
 * ---------------
 * Custom iterator can be made wth [Sybmol.iterator] method.
 * */

// this message object a custom made iterator
const messages = {
	[Symbol.iterator]: function () {
		let step = 0;
		const iterator = {
			next: function () {
				step++;
				if (step === 1) {
					return { value: "Hey", done: false };
				} else if (step === 2) {
					return { value: "Dude", done: false };
				}
				return { value: undefined, done: true };
			}
		}
		return iterator;
	}
}

for (const msg of messages) {
	console.log(msg);
}
// >>> Hey
// >>> Dude
/**
 * Generator function
 * ------------------
 * Generator function returna a iterable object.
 * **/

// generator function is defined using * symbol
function* generator() {
	yield "Hello";
	yield "Suneeth";
}

const iterable_object = generator();
// now this is a iterable object from generator function

for (const word of iterable_object) {
	console.log(word);
}
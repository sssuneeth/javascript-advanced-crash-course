// how variable scope works on nested function
// sample code
let text = "Hello";

function outer() {
	let text_two = "World";

	function inner() {
		let text_three = "!";
		console.log(text, text_two, text_three);
	}
	inner();
}
outer();

/** 
 * Working process
 * ---------------
 * 
 * lets start with line 10
 * javascript lookup for values in log,
 * only text_three is found in function level and increase a step and lookup for other two values.
 * Still one left and finally increase one more step and loopup in outer function.
 * 
 * Output will be:
 * > "Hello World !" 
*/
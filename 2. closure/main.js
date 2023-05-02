// Javascript Closure

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
/**
 * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state
 * (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. 
 * In JavaScript, closures are created every time a function is created, at function creation time.
*/

function init() {
	let name = "sssuneeth";
	function innerFunc() {
		console.log(name);
	}
	return innerFunc;
}

const fn = init();
fn();

/**
 * Output:
 * > "sssuneeth"
 * 
 * innerFunc returns with outer function scope.
*/
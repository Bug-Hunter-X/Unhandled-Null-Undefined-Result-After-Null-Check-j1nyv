function foo(a, b) {
  a ??= 0; // Use nullish coalescing for default values
  b ??= 0;

  //If you expect numeric values
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error
  }

  return a + b; // Or any other operation that can handle nulls
}
//additional checks or handling for undefined values can be added here depending on the desired behavior
//for instance, you can add checks like:
if (typeof a === 'undefined' || typeof b === 'undefined') {
//Handle undefined values appropriately
}
console.log(foo(null, 2)); // Output: 2
console.log(foo(5, null)); // Output: 5
console.log(foo(undefined, 2)); // Output: 2
console.log(foo(5, undefined)); // Output: 5
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, undefined)); // Output: 0
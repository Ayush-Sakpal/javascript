let age = 33;
let score = "101";
let num = "23abc";

// both types of syntax works
console.log(typeof(age));
console.log(typeof age);

age = "33";

console.log(typeof(age));

console.log(typeof(score));
// convert to "number"
value_of_score = Number(score);
console.log(typeof(value_of_score));

value_of_num = Number(num);
console.log(typeof(value_of_num));
console.log(value_of_num); // "NaN" => Not a Number

// "33" -> 33
// "33abc" -> NaN
// true -> 1; false -> 0
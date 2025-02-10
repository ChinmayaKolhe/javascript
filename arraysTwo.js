const cricketers=["Sachin","Dhoni","Virat","Rohit"];
const heroes=["Superman","Batman","Spiderman","Ironman"];
//heroes.push(cricketers) // Pushing an array into another array
//console.log(heroes);

const new_heroes=heroes.concat(cricketers) // Concatenating two arrays
console.log(new_heroes);

const all_heroes=[...cricketers,...heroes] // Using spread operator
console.log(all_heroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity) // Flattening an array. Infinity is used to flatten nested arrays
console.log(real_another_array);


console.log(Array.isArray(real_another_array)) // Checking if the given object is an array or not
console.log(Array.from("Hello")) // Converting a string into an array
console.log(Array.from({name:"chinmaya"})); // Converting an object into an array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)) // Creating an array from the given arguments;


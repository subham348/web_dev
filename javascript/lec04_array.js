var user = Array("Subham", "subham348@gmail.com", 3, 34, true);

user.pop();
console.log(user);

user.unshift("New value");
console.log(user);

user.shift();
console.log(user);

console.log(user.indexOf(34));

console.log(user.indexOf(50));


console.log(Array.from("Subham"));



// var names = Array("Subham", "Tarun", "Rishav", "Sourav");

// names.forEach((index) => {      // forEach is not counted as loop
//     console.log(index + "wa");
// });
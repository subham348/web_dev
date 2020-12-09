// fill
var testArray = [2, 4, 6, 3, 5, 8, 9];
console.log(testArray.fill("s"));

var testArray1 = [2, 4, 6, 3, 5, 8, 9];
console.log(testArray1.fill("s", 2));

var testArray2 = [2, 4, 6, 3, 5, 8, 9];
console.log(testArray2.fill("s", 2, 5));

// filter
var testArray3 = [2, 4, 6, 3, 5, 8, 9];
console.log(testArray3.filter( (num) => num > 4));

// slice
var testArray4 = [2, 4, 6, 3, 5, 8, 9];
console.log(testArray4.slice(3, 6));

// splice
var testArray5 = ["john", "din", "don", "qwe", "toy", "god"];
testArray5.splice(1, 3, 12, 15);
console.log(testArray5);

// var testArray5 = ["john", "din", "don", "qwe", "toy", "god"];
// console.log(testArray5.splice(1, 3, 12, 15));                   // NOT Working like this
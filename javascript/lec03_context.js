// sayHello();

// function sayHello() {
//     console.log("Hello");
// }

var myName = "subham";
if(myName === myName) {
    console.log(`This is ${myName}`);
}


// var myName = "subham";
// if(myName === window.myName) { // This window context is for browsers and works fine there and here
//     console.log(`This is ${myName}`);
// }



        // NOTES

// Two types of context :- Global context and Execution context
//      Execution context :- 1> Variable object, 2> Scope chain, 3> this

// 1> Function declarations are scanned and made available.
// 2> Variable declarations are scanned and made undefined.



// bigTipper("200"); // Will give error bigTipper is not a function

// var bigTipper = function (a) {
//     a = parseInt(a);
//     console.log(a + 15);
// };


var bigTipper = function (a) {
    a = parseInt(a);
    console.log(a + 15);
};

bigTipper("200");


// variable value :- undefined
console.log(name); // Undefined, not giving error
var name = "Subham";




// Scope chain

function abc() {
    var ab = "Sourav";
    console.log(ab);
}

abc();

// console.log(ab); // This will error as ab is not defined


console.log(this);

function myGame() {
    var game = "pubg";
    console.log(this);
}
myGame();
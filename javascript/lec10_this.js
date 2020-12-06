// NOTE:- For all regular function calls, this points to window object

console.log(this);

var user = {
    firstName: "Subham",
    lastNmae: "Mahato",
    email: "subham348@gmail.com",
    getCourseCount: function() {
        console.log("Line 10", this);
        function sayHello() {
            console.log("Hello", this);
        }
        sayHello();
    }
};

user.getCourseCount();
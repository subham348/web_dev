var users = {
    firstName: "Subham",
    lastName: "Mahato",
    email: "subham348@gmail.com",
    githubAccount: true,
    courseList: [],
    buyCourse: function(courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function() {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    }
};

console.log(users.firstName);
// console.log(users["firstName"]);

// console.log(users);

users.buyCourse("JavaScript");

console.log(users.getCourseCount());
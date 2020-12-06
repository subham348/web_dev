var users = Array("Subham", "subham348@gmail.com", 3, 34, true);

for(const n of users) {        // forOf loop is used for accessing values of array
    console.log(n);
}


const names = {                // forIn loop is used for accessing objects
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook"
};

for(const n in names) {
    console.log(`Key value is: ${n} and it's value is ${names[n]}`);
}
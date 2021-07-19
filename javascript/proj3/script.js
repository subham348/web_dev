const courses = [
    {
        name: "Complete ReactJS course",
        price: "2.3"
    },
    {
        name: "Complete Angular course",
        price: "2.1"
    },
    {
        name: "Complete MERN course",
        price: "2.7"
    },
    {
        name: "Complete C++ course",
        price: "2.8"
    },
];

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);

        ul.appendChild(li);
    });
}

// generateList();
window.addEventListener("load", generateList);

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price);
    generateList();
});



// Assignment done by me

function addButton() {
    const div = document.querySelector("div");
    const newbutton = document.createElement("button");
    // newbutton.classList.add("btn-success");
    newbutton.setAttribute("class", "btn btn-primary btn-lg mt-4 mx-auto d-block sort-btn");
    const bname = document.createTextNode("Sort courses in decreasing order");
    newbutton.appendChild(bname);
    div.appendChild(newbutton);

    newbutton.addEventListener("click", () => {
        courses.sort( (a, b) => b.price - a.price);
        generateList();
    });
}

window.addEventListener("load", addButton);
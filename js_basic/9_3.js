const body = document.body;

const heading = document.querySelector("#heading");
const main = document.querySelector("#main");

// const newHeading = document.createElement("h1");
// // newHeading.textContent = "hello ar";
// newHeading.innerText = "hello ar";
// body.append(newHeading);

const link = document.querySelector("a");

const newDiv = document.createElement("div");
// newDiv.innerText = "<h1> New hello world</h1>";
newDiv.innerHTML = "<h1> New hello world</h1>";

// body.append('Hello', 'JS', 'Bangladesh');

// heading.remove();

heading.style.color = "red";
heading.setAttribute("title", "set from js");

console.log(heading.getAttribute("id"));
body.append(newDiv);

console.log(link.getAttribute("href"));
link.setAttribute("href", "https://google.com");
// console.log(link.href);

// heading.setAttribute("class", heading.getAttribute("class") + " newClass");

heading.classList.add("newclass");
// heading.classList.remove("heading");
// heading.classList.toggle("heading");

heading.addEventListener("click", function () {
  heading.classList.toggle("newClass", ture);
});

console.log(heading.classList);

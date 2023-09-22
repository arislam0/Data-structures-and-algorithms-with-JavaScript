const heading = document.querySelector("h1");
const form = document.querySelector("form");
const input = document.querySelector("#text");
const submit = document.querySelector('input[type="submit"]');
const para = document.querySelector("#show-input");
const listItem = document.querySelector("li");

// submit.addEventListener("click", function () {
//   heading.style.color = "red";
// });

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let val = input.value;
//   //   console.log(val);
//   para.innerHTML = val;
// });

// submit.addEventListener("click ", function (e) {
//   e.preventDefault();
//   let val = input.value;
//   //   console.log(val);
//   para.innerHTML = val;
// });

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(e);
// });

// listItem.addEventListener("click", function (e) {
//   // e.preventDefault();
//   console.log(e);
// });

// document.addEventListener("keypress", function (e) {
//   console.log(e);
// }); // dblclick

submit.addEventListener("focus", function (e) {
  heading.style.backgroundColor = "orange";
}); // blur

submit.addEventListener("mouseover", function (e) {
  listItem.innerHTML = "input was hoverewd";
}); // mouseleave

submit.addEventListener("click", myFunc);

function myFunc() {
  console.log("i was clicked");
}

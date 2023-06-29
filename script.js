let answersection = document.querySelector(".answer");
let buttons = document.querySelectorAll(".buttons");

let numberbuttons = document.querySelectorAll(".number");
let operationbuttons = document.querySelectorAll(".operation");

let equalbutton = document.querySelector(".egal");
let acbutton = document.querySelector(".ac");
let delbutton = document.querySelector(".del");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    answersection.value += button.value;
  });
});
equalbutton.addEventListener("click", () => {
  answersection.value = eval(answersection.value);
});

acbutton.addEventListener("click", () => {
  answersection.value = "";
});
delbutton.addEventListener("click", () => {
  answersection.value = answersection.value.substr(
    0,
    answersection.value.length - 1
  );
});

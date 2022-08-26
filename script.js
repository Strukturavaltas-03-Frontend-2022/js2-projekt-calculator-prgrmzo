const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const mult = document.querySelector(".mult");
const divide = document.querySelector(".divide");
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals-box");
const display = document.querySelector(".display");

const nums = document.querySelectorAll(".nums");
const numbers = Array.from(nums);

numbers.forEach((n) =>
  n.addEventListener("click", function () {
    display.innerHTML += n.innerHTML;
  })
);

plus.addEventListener("click", () => {
  display.innerHTML += " + ";
});
minus.addEventListener("click", () => {
  display.innerHTML += " - ";
});
mult.addEventListener("click", () => {
  display.innerHTML += " * ";
});
divide.addEventListener("click", () => {
  display.innerHTML += " / ";
});
dot.addEventListener("click", () => {
  display.innerHTML += ".";
});
equals.addEventListener("click", () => {
  display.innerHTML += " =";
});
// Clear
clear.addEventListener("click", () => {
  display.innerHTML = "";
});

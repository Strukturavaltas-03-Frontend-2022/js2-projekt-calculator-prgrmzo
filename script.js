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

let calculations = 0;

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

// A számolás függvénye
const calc = () => {
  const calcArr = display.innerHTML.split(" ");
  while (calcArr.length > 2) {
    let num1 = Number(calcArr[0]);
    let operator = calcArr[1];
    let num2 = Number(calcArr[2]);

    switch (operator) {
      case "+":
        calculations = num1 + num2;
        break;
      case "-":
        calculations = num1 - num2;
        break;
      case "*":
        calculations = num1 * num2;
        break;
      case "/":
        calculations = num1 / num2;
        break;
    }

    for (let i = 0; i < 3; i++) {
      calcArr.shift();
    }
    calcArr.unshift(calculations);
  }

  if (
    !Number.isNaN(calcArr[0]) &&
    Number.isSafeInteger(calcArr[0]) &&
    Number.isFinite(calcArr[0])
  ) {
    display.innerHTML = calcArr[0];
  } else {
    display.innerHTML = "ERROR";
  }
};
//Equals
equals.addEventListener("click", () => {
  calc();
});
// Clear
clear.addEventListener("click", () => {
  display.innerHTML = "";
});

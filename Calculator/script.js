const displayScreen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let calculation = [];

let accumulativeCalculation;

function calculate(button) {
  const value = button.textContent;
  if (value === "CLEAR") {
    calculation = [];
    displayScreen.textContent = "Ready";
  } else if (value === "=") {
    displayScreen.textContent = eval(accumulativeCalculation);
  } else {
    calculation.push(value);
    accumulativeCalculation = calculation.join("");
    displayScreen.textContent = accumulativeCalculation;
  }
}

function eval(expression) {
  let result = 0;
  try {
    result = Function("return " + expression)();
  } catch (error) {
    result = "Error";
  }
  return result;
}
buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);

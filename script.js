let displayValue = [];

let buttons = document.querySelectorAll("button");
let textBox = document.querySelector("input");
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent == "=") {
        textBox.value = calculate(displayValue);
    } else if (button.textContent == "CL") {
       displayValue = [];
       textBox.value = displayValue;
    } else {
      displayValue.push(button.textContent);
      textBox.value = displayValue.join("");
    }
  });
});

function operate(a, b, operator) {
  switch(operator) {
    case "=":
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "+":
      return add(a, b);
      break;
    case "CL":
      clear();
      break;
  }
}

function calculate(value) {
    let i = 0;
    for (j = 0; j < value.length; j++) {
      if (value[j] == "+" || value[j] == "-" || value[j] == "*" || value[j] == "/") {
        i++;
      }
    }
    let tempA = value[0];
    let operator = value[1];
    let tempB = value[2];
    return operate(Number(tempA), Number(tempB), operator);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function clear() {
  break;
}

let arrayValue = [];
let tempValue = "";
let displayValue = "";
let buttons = document.querySelectorAll("button");
let textBox = document.querySelector("input");
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent == "=") {
        arrayValue.push(tempValue);
        arrayValue.push(button.textContent);
        textBox.value = arrayValue.join("");
        console.log(arrayValue);
        textBox.value = calculate(arrayValue);
    } else if (button.textContent == "CL") {
       arrayValue = [];
       tempValue = "";
       displayValue = "";
       textBox.value = arrayValue;
    } else {
      if (!(button.textContent == "+" || button.textContent == "-" || button.textContent == "*" || button.textContent == "/")) {
        tempValue += button.textContent;
        displayValue += button.textContent;
        textBox.value = displayValue;
      } else {
        arrayValue.push(tempValue);
        arrayValue.push(button.textContent);
        displayValue += button.textContent;
        textBox.value = displayValue;
        tempValue = "";
        console.log(arrayValue);
    }
  }});
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
  let currResult = 0;
  for (let j = 0; j < value.length; j++) {
    if (value[j] == "+" || value[j] == "-" || value[j] == "*" || value[j] == "/") {
      currResult += recursiveFn(currResult, value[j-1], value[j+1], value[j], i);
      i++;
    }
  }
  return currResult;
}

function recursiveFn(result, a, b, operator, index) {
  console.log(index);
  if (index == 0) {
      console.log("a: " + a + " b: " + b + " operator: " + operator + " index 1");
      return operate(Number(a), Number(b), operator);
  } else {
          console.log("result: " + result + " b: " + b + " operator: " + operator + " index 2");
    return operate(result, Number(b), operator);
  }
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

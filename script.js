let arrayValue = [];
let tempValue = "";
let displayValue = "";
let buttons = document.querySelectorAll("button");
let textBox = document.querySelector("input");
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent == "=") {
        arrayValue.push(tempValue);
        // arrayValue.push(button.textContent);
        textBox.value = arrayValue.join("");
        textBox.value = operate(arrayValue);
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
    }
  }});
});

function operate(value) {
  let i = 0;
  let currResult = 0;
    for (let j = value.length; j > 0; j--) {
       if (value[j] == "/") {
        currResult = divide(Number(value[j-1]), Number(value[j+1]));
        value.splice(j-1, 3, currResult);
        console.log(value + " this is divide");
      }
    }

    for (let j = value.length; j > 0; j--) {
      if (value[j] == "*") {
        currResult = multiply(Number(value[j-1]), Number(value[j+1]));
        value.splice(j-1, 3, currResult);
        console.log(value);
        console.log(currResult + "this is times");
      }
    }

    for (let j = value.length; j > 0; j--) {
      if (value[j] == "+") {
        currResult = add(Number(value[j-1]), Number(value[j+1]));
        value.splice(j-1, 3, currResult);
        console.log(value + " this is addition");
      }
    }
    for (let j = value.length; j > 0; j--) {
      if (value[j] == "-") {
        currResult = minus(Number(value[j-1]), Number(value[j+1]));
        value.splice(j-1, 3, currResult);
        console.log(value + " this is minus");
      }
    }
  return currResult;
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

let arrayValue = [];
let tempValue = "";
let displayValue = "";
let buttons = document.querySelectorAll("button");
let textBox = document.querySelector("input");
textBox.disabled = true;
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent == "=") {
        arrayValue.push(tempValue);
        textBox.value = arrayValue.join("");
        calc(arrayValue);
    } else if (button.textContent == "CL") {
       arrayValue = [];
       tempValue = "";
       displayValue = "";
       textBox.value = arrayValue;
    } else {
      if (!(button.textContent == "+" || button.textContent == "-" ||
          button.textContent == "*" || button.textContent == "/" ||
          button.textContent == "(" || button.textContent == ")")) {
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
      }
    }

    for (let j = value.length; j > 0; j--) {
      if (value[j] == "*") {
        currResult = multiply(Number(value[j-1]), Number(value[j+1]));
        value.splice(j-1, 3, currResult);
      }
    }

    for (let j = value.length; j > 0; j--) {
      if (value[j] == "+") {
        currResult = add(Number(value[j-1]), Number(value[j+1]));
        value.splice(j-1, 3, currResult);
      }
    }
    for (let j = value.length; j > 0; j--) {
      if (value[j] == "-") {
        currResult = subtract(Number(value[j-1]), Number(value[j+1]));
        value.splice(j-1, 3, currResult);
      }
    }
  return currResult;
}

function calc(value) {
  let indexStart = undefined;
  let indexEnd = undefined;

  for (let j = value.length; j > 0; j--) {
    if (value[j] == "(") {
      indexStart = j;
    } else if (value[j] == ")") {
      indexEnd = j;
    }
  }

  if (!(indexStart == undefined && indexEnd == undefined)) {
    let tempArray = value.slice(indexStart+1, indexEnd);
    let tempResult = operate(tempArray);
    value.splice(indexStart - 1, (indexEnd-indexStart + 3), tempResult);
  } else if (indexStart == undefined && indexEnd == undefined) {
    let answer = operate(value);
    if (answer == Infinity || isNaN(answer)) {
      answer = "THAT DOESN'T WORK!"
    }
    document.querySelector("input").value = answer;
    return;
  }
  calc(value);
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

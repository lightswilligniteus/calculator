function operate() {
  let tempValue = [];
  let buttons = document.querySelectorAll("button");
  let textBox = document.querySelector("input");
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.textContent == "=") {
          textBox.value = calculate(tempValue);
      } else if (button.textContent == "CL") {
         tempValue = [];
         textBox.value = tempValue;
      } else {
        tempValue.push(button.textContent);
        textBox.value = tempValue.join("");
      }
    });
  });
}

function calculate(values) {
  let result = values.join("");
  try {
    return doMath(result);
  }
  catch(err) {
    return "Invalid input!";
  }
}

function doMath(fn) {
  return new Function('return ' + fn)();
}

operate();

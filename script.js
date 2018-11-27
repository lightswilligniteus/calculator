// Array appended to with each value, seperated by an operator
// The calculator checks for syntax (e.g. ++ doesn't wrok)
// = is the 'go bnutton'
// . ( ) + - / * = and 0-9
// Needs to deal with negatives (possible plus minus button?)

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

function calculate(values) {
  let result = values.join("");
  // return evil(result);
  try {
    return doMath(result).toFixed(2);
  }
  catch(err) {
    return "Invalid input!";
  }
}

function doMath(fn) {
  return new Function('return ' + fn)();
}

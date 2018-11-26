let tempa = 0
let a = [];
let operator;
let previousPress;
let index = 0;

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    pressed = button.textContent;
    a[index] = 0;
    if(pressed == "=") {
      a[index] = tempa;
      operate(a, operator)
    } else if (pressed == "CL") {
      operator = null;
      a = null;
    } else if (pressed == "+" || pressed == "-" || pressed == "*" || pressed == "/") {
      if (!(previousPress == "+" || previousPress == "-" || previousPress == "*" || previousPress == "/")) {
          operator = pressed;
          previousPress = pressed;
          a[index] = tempa;
          tempa = 0;
          index++;
      } else {
        console.log("invalid");
      }
    } else {
      tempa += pressed;
      previouspress = pressed;
    }
  })
});


function operate(num, operator) {
  if (operator == "+") {
    console.log(add(num));
  } else if (operator == "-") {
    console.log(subtract(num));
  } else if (operator == "*") {
    console.log(multiply(num));
  } else if (operator == "/") {
    console.log(divide(num));
  }
}

function add(num) {
	let add = 0;
	for(let i = 0; i < num.length; i++) {
    console.log(Number(num[i]));
		add += Number(num[i]);
	}
	return add;
}

function subtract (num) {
	let subtract = num[0];
	for (let i = 1; i < num.length; i++) {
		subtract -= Number(num[i]);
	}
	return subtract;
}

function multiply (num) {
	let multiply = 1;
	for (let i = 0; i < num.length; i++) {
		multiply *= num[i];
	}
	return multiply;
}

function divide(num) {
  let divide = num[0];
  for(let i = 1; i < num.length; i++) {
    console.log(Number(num[i]));
    divide /= Number(num[i]);
  }
  return divide;
  }

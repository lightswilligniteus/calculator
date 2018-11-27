// Array appended to with each value, seperated by an operator
// The calculator checks for syntax (e.g. ++ doesn't wrok)
// = is the 'go bnutton'
// . ( ) + - / * = and 0-9
// Needs to deal with negatives (possible plus minus button?)

let tempa = 0
let a = [];
let operator = [];
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
          operator[index] = pressed;
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
  let answer = 0;
  for(i=0; i < operator.length; i++) {
    if (operator[i] == "+") {
      answer += add(num);
    } else if (operator[i] == "-") {
      answer += subtract(num);
    } else if (operator[i] == "*") {
      answer += multiply(num);
    } else if (operator[i] == "/") {
      answer += divide(num);
    }
  }
  console.log(answer);
}

function add(num) {
	let add = 0;
	for(let i = 0; i < 2; i++) {
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

// Plan
// 1. Add basic functions:
//   - add
//   - subtract
//   - multiply
//   - divide

function add(a, b) {
  return a + b;
} 

function subtract(a, b) {
  return a - b;
}

// console.log(subtract(10, 5));
// console.log(subtract(9, 1));

function multiply(a, b) {
  return a * b;
}

// console.log(multiply(10, 5));
// console.log(multiply(9, 9));

function divide(a, b) {
  return a / b;
}

// console.log(divide(10, 5));
// console.log(divide(9, 2));

// 2. Variables (3) in calc ops:
//   - number
//   - operator
//   - another number

let operator = prompt("Operator?");
let firstNum = Number(prompt("First number?"));
let secondNum = Number(prompt("Second number?"));

// 3. function operate():
//   - parameters (operator, num1, num2)
//   - calls above basic function to calculate

function operate(operator, firstNum, secondNum) {
  if (operator === "+") {
    return add(firstNum, secondNum);
  } else if (operator === "-") {
    return subtract(firstNum, secondNum);
  } else if (operator === "*") {
    return multiply(firstNum, secondNum);
  } else if (operator === "/") {
    return divide(firstNum, secondNum);
  }
}

// console.log(operate(operator, firstNum, secondNum));

// 4. HTML:
//   - basic html
//   - buttons for each digit
//   - buttons for each function
//   - button for equal sign
//   - display for calc
//   - button for "clear"

//DONE

// 5. display function:
//   - function that updates the display
//   - display value stored in variable for use in next step

const displayResult = document.querySelector(".display-section");
displayResult.textContent = 0;

function display (operator, firstNum, secondNum) {
  let result = operate(operator, firstNum, secondNum);
  console.log(result);
  if (result === undefined) {
    result = 0;
  }
  displayResult.textContent = result;
}

display(operator, firstNum, secondNum);

// 6. make calc work:
//   - store first and second number as inputs
//   - utilize operator that user selects
//   - operate() on two nums when user presses "=" key
//   - operate() should update display with solution
//   - figure out how to store all values and call operate() with them

// 7. potential bugs to fix:
//   - should be able to handle multiple numbers and operators
//     as well as bodmas rules
//   - evaluate first pair of numbers then continue rather than all at once
//   - round answers with long decimals so they dont overflow screen
//   - pressing "=" before entering all nums/operator could cause problems
//   - pressing "clear" should wipe existing data, user starts fresh
//   - display message if user tries to divide by 0, dont let calc crash

// 8. Extra creds:
//   - allow users to add floating point numbers but make sure only one decimal
//   - make it look nice, sexy css, bootstrap etc
//   - add "backspace" buttons
//   - add keyboard support

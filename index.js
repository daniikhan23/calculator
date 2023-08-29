// calculation functions
function add(a, b) {
  return Number(a) + Number(b);
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

// operators
const opDiv = document.querySelector(".btn-divide");
const opMul = document.querySelector(".btn-multiply");
const opSub = document.querySelector(".btn-sub");
const opAdd = document.querySelector(".btn-add");
const opEqual = document.querySelector(".btn-equal");
let operator;

opDiv.addEventListener("click", () => {
  operator = "/";
  displayResult.textContent += "/";
  console.log(`operator: ${operator}`);
});

opMul.addEventListener("click", () => {
  operator = "*";
  displayResult.textContent += "*";
  console.log(`operator: ${operator}`);
});

opSub.addEventListener("click", () => {
  displayArray.push("-");
  displayResult.textContent += "-";
  console.log(displayResult.textContent);
});

opAdd.addEventListener("click", () => {
  displayArray.push("+");
  displayResult.textContent += "+";
  console.log(displayResult.textContent);
});

opEqual.addEventListener("click", () => {
  display(displayArray);
});

// number inputs 

let firstNum;
let secondNum;
let displayArray = [];

const numZero = document.querySelector(".btn-zero");
numZero.addEventListener("click", () => {
  displayArray.push("0");
  displayResult.textContent += "0";
  console.log(displayResult.textContent);
});

const numOne = document.querySelector(".btn-one");
numOne.addEventListener("click", () => {
  displayArray.push("1");
  displayResult.textContent += "1";
  console.log(displayResult.textContent);
});

const numTwo = document.querySelector(".btn-two");
numTwo.addEventListener("click", () => {
  displayArray.push("2");
  displayResult.textContent += "2";
  console.log(displayResult.textContent);
});

const numThree = document.querySelector(".btn-three");
numThree.addEventListener("click", () => {
  displayArray.push("3");
  displayResult.textContent += "3";
  console.log(displayResult.textContent);
});

const numFour = document.querySelector(".btn-four");
numFour.addEventListener("click", () => {
  displayArray.push("4");
  displayResult.textContent += "4";
  console.log(displayResult.textContent);
});

const numFive = document.querySelector(".btn-five");
numFive.addEventListener("click", () => {
  displayArray.push("5");
  displayResult.textContent += "5";
  console.log(displayResult.textContent);
});

const numSix = document.querySelector(".btn-six");
numSix.addEventListener("click", () => {
  displayArray.push("6");
  displayResult.textContent += "6";
  console.log(displayResult.textContent);
});

const numSeven = document.querySelector(".btn-seven");
numSeven.addEventListener("click", () => {
  displayArray.push("7");
  displayResult.textContent += "7";
  console.log(displayResult.textContent);
});

const numEight = document.querySelector(".btn-eight");
numEight.addEventListener("click", () => {
  displayArray.push("8");
  displayResult.textContent += "8";
  console.log(displayResult.textContent);
});

const numNine = document.querySelector(".btn-nine");
numNine.addEventListener("click", () => {
  displayArray.push("9");
  displayResult.textContent += "9";
  console.log(displayResult.textContent);
});



// function operate():

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

// 5. display function:
//   - function that updates the display
//   - display value stored in variable for use in next step

const displayResult = document.querySelector(".display-section");

function display (displayArray) {
  console.log(displayArray);
  let arrLength = displayArray.length;
  let count = 0;
  for (let i = 0; i < arrLength; i++) {
    console.log(`Current index: ${i}`);
    if (displayArray[i] === '+' || displayArray[i] === '-') {
      console.log(displayArray[i]);
      count = i;
    }
  }

  console.log(`Count: ${count}`);

  firstNum = Number(displayArray.slice(0, count).join(''));
  console.log(`Num1: ${firstNum}`);

  operator = displayArray[count];
  console.log(`Operator: ${operator}`);

  secondNum = Number(displayArray.slice(count + 1).join(''));
  console.log(`Num2: ${secondNum}`);

  let result = operate(operator, firstNum, secondNum);
  if (result === undefined) {
    result = 0;
  }
  displayResult.textContent = result;
  console.log(`result: ${displayResult.textContent}`);
}


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

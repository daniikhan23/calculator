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

// variable declarations
let operator;
let firstNum;
let secondNum;
let displayArray = [];
let result;
let displayText;

// delete and clear buttons
const btnDel = document.querySelector(".btn-del");
const btnClear = document.querySelector(".btn-ac");

btnDel.addEventListener("click", () => {
  displayArray.pop();
  displayText = displayResult.textContent;
  displayText = displayText.substring(0, displayText.length - 1);
  displayResult.textContent = displayText;
})

btnClear.addEventListener("click", () => {
  displayResult.textContent = "0";
  displayArray = [];
  firstNum = 0;
  operator = "";
  secondNum = 0;
  console.clear();
})

// operators
const opDiv = document.querySelector(".btn-divide");
const opMul = document.querySelector(".btn-multiply");
const opSub = document.querySelector(".btn-sub");
const opAdd = document.querySelector(".btn-add");
const opEqual = document.querySelector(".btn-equal");


opDiv.addEventListener("click", () => {
  displayArray.push("/");
  displayResult.textContent += "÷";
  console.log(displayResult.textContent);
});

opMul.addEventListener("click", () => {
  displayArray.push("*");
  displayResult.textContent += "x";
  console.log(displayResult.textContent);
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



const decPt = document.querySelector(".btn-decimal");
decPt.addEventListener("click", () => {
  displayArray.push(".");
  displayResult.textContent += ".";
  console.log(displayResult.textContent);
});

const numZero = document.querySelector(".btn-zero");
numZero.addEventListener("click", () => {
  if (displayResult.textContent === "0") {

  } else {
    displayResult.textContent += "0";
    displayArray.push("0");
  }
  console.log(displayResult.textContent);
});

const numOne = document.querySelector(".btn-one");
numOne.addEventListener("click", () => {
  displayArray.push("1");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "1";
  } else {
    displayResult.textContent += "1";
  }
  console.log(displayResult.textContent);
});

const numTwo = document.querySelector(".btn-two");
numTwo.addEventListener("click", () => {
  displayArray.push("2");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "2";
  } else {
    displayResult.textContent += "2";
  }
  console.log(displayResult.textContent);
});

const numThree = document.querySelector(".btn-three");
numThree.addEventListener("click", () => {
  displayArray.push("3");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "3";
  } else {
    displayResult.textContent += "3";
  }
  console.log(displayResult.textContent);
});

const numFour = document.querySelector(".btn-four");
numFour.addEventListener("click", () => {
  displayArray.push("4");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "4";
  } else {
    displayResult.textContent += "4";
  }
  console.log(displayResult.textContent);
});

const numFive = document.querySelector(".btn-five");
numFive.addEventListener("click", () => {
  displayArray.push("5");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "5";
  } else {
    displayResult.textContent += "5";
  }
  console.log(displayResult.textContent);
});

const numSix = document.querySelector(".btn-six");
numSix.addEventListener("click", () => {
  displayArray.push("6");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "6";
  } else {
    displayResult.textContent += "6";
  }
  console.log(displayResult.textContent);
});

const numSeven = document.querySelector(".btn-seven");
numSeven.addEventListener("click", () => {
  displayArray.push("7");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "7";
  } else {
    displayResult.textContent += "7";
  }
  console.log(displayResult.textContent);
});

const numEight = document.querySelector(".btn-eight");
numEight.addEventListener("click", () => {
  displayArray.push("8");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "8";
  } else {
    displayResult.textContent += "8";
  }
  console.log(displayResult.textContent);
});

const numNine = document.querySelector(".btn-nine");
numNine.addEventListener("click", () => {
  displayArray.push("9");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "9";
  } else {
    displayResult.textContent += "9";
  }
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

// function to traverse array of nums, initialise variables calc result
function calcResult(displayArray) {
  console.log(displayArray);
  let arrLength = displayArray.length;
  let count = 0;
  for (let i = 0; i < arrLength; i++) {
    console.log(`Current index: ${i}`);
    if (displayArray[i] === '+' || displayArray[i] === '-' ||
    displayArray[i] === '*' || displayArray[i] === '/') {
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

  result = operate(operator, firstNum, secondNum);
  console.log(result);

  result = result.toFixed(2);

  return result;
}

// 5. display function:
//   - function that updates the display
//   - display value stored in variable for use in next step
const displayResult = document.querySelector(".display-section");
displayResult.textContent = "0";

function display (displayArray) {
  result = calcResult(displayArray);

  if (result === undefined) {
    result = 0;
  } else if (result == Infinity) {
    displayResult.textContent = "Infinity - don't divide by a zero bruv";
    result = 0;
  }

  displayResult.textContent = result;
  firstNum = result;

  displayArray.splice(0, displayArray.length);
  console.log(`After emptying: ${displayArray}`);
  
  displayArray.push(result);
  console.log(`Pushing last result: ${displayArray}`);
  
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

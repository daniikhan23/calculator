// variable declarations
let operator;
let firstNum;
let secondNum;
let displayArray = [];
let result;
let displayText;

const btnDel = document.querySelector(".btn-del");
const btnClear = document.querySelector(".btn-ac");

const opDiv = document.querySelector(".btn-divide");
const opMul = document.querySelector(".btn-multiply");
const opSub = document.querySelector(".btn-sub");
const opAdd = document.querySelector(".btn-add");
const opEqual = document.querySelector(".btn-equal");
const opPercent = document.querySelector(".btn-percent");

const decPt = document.querySelector(".btn-decimal");
const numZero = document.querySelector(".btn-zero");
const numOne = document.querySelector(".btn-one");
const numTwo = document.querySelector(".btn-two");
const numThree = document.querySelector(".btn-three");
const numFour = document.querySelector(".btn-four");
const numFive = document.querySelector(".btn-five");
const numSix = document.querySelector(".btn-six");
const numSeven = document.querySelector(".btn-seven");
const numEight = document.querySelector(".btn-eight");
const numNine = document.querySelector(".btn-nine");
const displayResult = document.querySelector(".display-section");
displayResult.textContent = "0";
const changeCol = document.querySelector(".btn-col");
const buttons = document.querySelectorAll('.btn');
let mode = "dark";

// Light/Dark mode
changeCol.addEventListener("click", () => {
  const buttons = document.querySelectorAll(".btn");
  const container = document.querySelector(".container");
  const displaySection = document.querySelector(".display-section");
  const buttonContainers = document.querySelector(".button-containers");

  if (mode === 'dark') {
    mode = 'light';
    buttons.forEach(button => {
      button.style.backgroundColor = 'White';
      button.style.color = 'Black';
      button.style.borderColor = '#fcfcfc';
      btnDel.style.color = '#61F4C8';
      btnClear.style.color = '#61F4C8';
      opPercent.style.color = '#61F4C8';
      opDiv.style.color = '#C70039';
      opMul.style.color = '#C70039';
      opSub.style.color = '#C70039';
      opAdd.style.color = '#C70039';
      opEqual.style.color = '#C70039';
      changeCol.style.backgroundColor = '#a5a8a6';
      changeCol.style.borderColor = '#a5a8a6';
    });
    container.style.backgroundColor = 'White';
    container.style.borderColor = 'White';
    displaySection.style.backgroundColor = 'White';
    displaySection.style.color = 'Black';
    buttonContainers.style.backgroundColor = '#ebedf0';
    buttonContainers.style.borderColor = '#ebedf0';
    document.body.style.backgroundColor = '#2d2d2e';
  } else {
    mode = 'dark';
    buttons.forEach(button => {
      button.style.backgroundColor = '#252525';
      button.style.color = 'White';
      button.style.borderColor = '#252525';
      btnDel.style.color = '#61F4C8';
      btnClear.style.color = '#61F4C8';
      opPercent.style.color = '#61F4C8';
      opDiv.style.color = '#C70039';
      opMul.style.color = '#C70039';
      opSub.style.color = '#C70039';
      opAdd.style.color = '#C70039';
      opEqual.style.color = '#C70039';
      changeCol.style.backgroundColor = '#a5a8a6';
    });
    container.style.backgroundColor = '#202020';
    container.style.borderColor = '#202020';
    displaySection.style.backgroundColor = '#202020';
    displaySection.style.color = 'White';
    buttonContainers.style.backgroundColor = '#282828';
    buttonContainers.style.borderColor = '#252525';
    document.body.style.backgroundColor = 'Wheat';
  }
});

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

// delete and clear buttons
btnDel.addEventListener("click", () => {
  displayArray.pop();
  console.log(displayArray);
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
opPercent.addEventListener("click", () => {
  let percentage = Number(displayArray.slice(0).join('')) / 100;
  percentage = percentage.toFixed(2);
  displayArray.splice(0, displayArray.length);
  displayArray.push(percentage);
  firstNum = percentage;
  displayResult.textContent = percentage;
})

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
decPt.addEventListener("click", () => {
  displayArray.push(".");
  displayResult.textContent += ".";
  console.log(displayResult.textContent);
});

numZero.addEventListener("click", () => {
  if (displayResult.textContent === "0") {

  } else {
    displayResult.textContent += "0";
    displayArray.push("0");
  }
  console.log(displayResult.textContent);
});

numOne.addEventListener("click", () => {
  displayArray.push("1");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "1";
  } else {
    displayResult.textContent += "1";
  }
  console.log(displayResult.textContent);
});

numTwo.addEventListener("click", () => {
  displayArray.push("2");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "2";
  } else {
    displayResult.textContent += "2";
  }
  console.log(displayResult.textContent);
});

numThree.addEventListener("click", () => {
  displayArray.push("3");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "3";
  } else {
    displayResult.textContent += "3";
  }
  console.log(displayResult.textContent);
});

numFour.addEventListener("click", () => {
  displayArray.push("4");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "4";
  } else {
    displayResult.textContent += "4";
  }
  console.log(displayResult.textContent);
});

numFive.addEventListener("click", () => {
  displayArray.push("5");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "5";
  } else {
    displayResult.textContent += "5";
  }
  console.log(displayResult.textContent);
});

numSix.addEventListener("click", () => {
  displayArray.push("6");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "6";
  } else {
    displayResult.textContent += "6";
  }
  console.log(displayResult.textContent);
});

numSeven.addEventListener("click", () => {
  displayArray.push("7");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "7";
  } else {
    displayResult.textContent += "7";
  }
  console.log(displayResult.textContent);
});

numEight.addEventListener("click", () => {
  displayArray.push("8");
  if (displayResult.textContent === "0") {
    displayResult.textContent = "8";
  } else {
    displayResult.textContent += "8";
  }
  console.log(displayResult.textContent);
});

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

//check decimal 
// function hasDecimal(result) {
//   if (Math.floor(result) !== result) {
//     result = result.toFixed(1);
//   }
// }

// function to traverse array of nums, initialise variables calc result
function calcResult(displayArray) {
  console.log(displayArray);
  let arrLength = displayArray.length;
  let index = 0;
  for (let i = 0; i < arrLength; i++) {
    console.log(`Current index: ${i}`);
    if (displayArray[i] === '+' || displayArray[i] === '-' ||
    displayArray[i] === '*' || displayArray[i] === '/') {
      console.log(displayArray[i]);
      index = i;
    }
  }

  console.log(`Count: ${index}`);

  firstNum = Number(displayArray.slice(0, index).join(''));
  console.log(`Num1: ${firstNum}`);

  operator = displayArray[index];
  console.log(`Operator: ${operator}`);

  secondNum = Number(displayArray.slice(index + 1).join(''));
  console.log(`Num2: ${secondNum}`);

  result = operate(operator, firstNum, secondNum);
  console.log(result);

  result = result.toFixed(1);

  return result;
}

// 5. display function:
//   - function that updates the display
//   - display value stored in variable for use in next step
function display (arr) {
  result = calcResult(arr);
  if (result === undefined) {
    result = 0;
  } else if (result == Infinity) {
    displayResult.textContent = "Can't divide by a zero!";
    result = 0;
  } else {
    displayResult.textContent = result;
    displayArray = result.split("");
  }
}

// 7. potential bugs to fix:
//   - should be able to handle multiple numbers and operators
//     as well as bodmas rules
//   - evaluate first pair of numbers then continue rather than all at once

// 8. Extra creds:
//   - add "backspace" buttons
//   - add keyboard support

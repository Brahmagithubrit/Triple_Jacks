const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const result = document.getElementById("result");
const clear_btn = document.getElementById("clear_btn");

let xTurn = true;
let counter = 0;
let isWin = false;

one.addEventListener("click", () => handleClick(one));
two.addEventListener("click", () => handleClick(two));
three.addEventListener("click", () => handleClick(three));
four.addEventListener("click", () => handleClick(four));
five.addEventListener("click", () => handleClick(five));
six.addEventListener("click", () => handleClick(six));
seven.addEventListener("click", () => handleClick(seven));
eight.addEventListener("click", () => handleClick(eight));
nine.addEventListener("click", () => handleClick(nine));
clear_btn.addEventListener("click", () => clearAll());

function clearAll() {
  const buttons = [one, two, three, four, five, six, seven, eight, nine];
  buttons.forEach((button) => (button.innerText = ""));
  xTurn = true ;
}

function handleClick(btn) {
  if (counter == 9) {
    // clear all btn inner text
    const buttons = [one, two, three, four, five, six, seven, eight, nine];
    buttons.forEach((button) => (button.innerText = ""));
  }
  if (isWin) {
    return;
  }

  if (btn.innerText !== "") {
    return; // Prevent clicking on an already filled cell
  }

  btn.innerText = xTurn ? "X" : "O";
  counter++;

  if (counter >= 3) {
    if (
      checkWin(one, two, three) ||
      checkWin(four, five, six) ||
      checkWin(seven, eight, nine) ||
      checkWin(one, four, seven) ||
      checkWin(two, five, eight) ||
      checkWin(three, six, nine) ||
      checkWin(one, five, nine) ||
      checkWin(three, five, seven)
    ) {
      return;
    }
  }

  xTurn = !xTurn;
}

function checkWin(one, two, three) {
  if (
    one.innerText === two.innerText &&
    two.innerText === three.innerText &&
    one.innerText !== ""
  ) {
    result.innerText = `Winner is ${one.innerText}`;
    isWin = true;
    return true;
  }
  return false;
}

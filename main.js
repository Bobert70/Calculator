let equation = "";
function display() {
  document.getElementById("display").innerHTML = equation;
  requestAnimationFrame(display)
}
display()

function add() { equation += "+"}
function subtract() {equation += "-"}
function multiply() { equation += "*"}
function divide() { equation += "/"}
function one() { equation += "1"}
function two() { equation += "2"}
function three() { equation += "3"}
function four() { equation += "4"}
function five() { equation += "5"}
function six() { equation += "6"}
function seven() { equation += "7"}
function eight() { equation += "8"}
function nine() { equation += "9"}
function zero() { equation += "0"}
function reset() { equation = ""}
function Rparentheses() { equation += "("}
function Lparentheses() { equation += ")"}
function solve() {
  equation = eval(equation);
}
let input = document.getElementById("input");

let a;
let b;

function one() {
  a = 1;

  input.innerText = a;
}

function two() {
  a = 2;
  input.innerText = a;
}

function thr() {
  a = 3;
  input.innerText = a;
}

function fou() {
  a = 4;
  input.innerText = a;
}

function fiv() {
  a = 5;
  input.innerText = a;
}

function six() {
  a = 6;
  input.innerText = a;
}

function sev() {
  a = 7;
  input.innerText = a;
}

function eig() {
  a = 8;
  input.innerText = a;
}

function nin() {
  a = 9;
  input.innerText = a;
}

function equ() {
  let result;
  switch (o) {
    case "+":
      result = b + a;
      break;
    case "-":
      result = b - a;
      break;
    case "*":
      result = b * a;
      break;
    case "/":
      result = b / a;
      break;
    case "%":
      result = b % a;
      break;
    default:
      result = a;
  }
  input.innerText = result;
  a = result;
}

function add() {
  b = a;
  o = "+";
  input.innerText = o;
}

function div() {
  b = a;
  o = "/";
  input.innerText = o;
}

function sub() {
  b = a;
  o = "-";
  input.innerText = o;
}

function mul() {
  b = a;
  o = "*";
  input.innerText = o;
}

function mod() {
  b = a;
  o = "%";
  input.innerText = o;
}

function cl() {
  a = null;
  b = null;
  o = null;
  input.innerText = "0";
}

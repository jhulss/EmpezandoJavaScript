import calculdadora from "./sumador";


const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const primero = document.querySelector("#primer-num");
const segundo = document.querySelector("#segundo-num");
const form = document.querySelector("#sumar-form");
const form2 = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado-div2");

const calcu = new calculdadora()
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + calcu.sumar(firstNumber, secondNumber) + "</p>";

});

const calcu2 = new calculdadora()
form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNum = Number.parseInt(primero.value);
  const secondNum = Number.parseInt(segundo.value);

  div2.innerHTML = "<p>" + calcu2.multiplicar(firstNum, secondNum) + "</p>";

});

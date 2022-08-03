const answer = document.querySelector(".answer");
const btn_add = document.querySelector(".btn-add");
const btn_subtract = document.querySelector(".btn-subtract");
const btn_divide = document.querySelector(".btn-divide");
const btn_multiply = document.querySelector(".btn-multiply");
const btn_modulus = document.querySelector(".btn-modulus");
const btn_clear = document.querySelector(".btn-clear");
const input_a = document.querySelector("#input-a");
const input_b = document.querySelector("#input-b");
// Sets input starter values of null
input_a.value = null;
input_b.value = null;

btn_add.addEventListener("click", () => {
  calculate("add");
});
btn_subtract.addEventListener("click", () => {
  calculate("subtract");
});
btn_divide.addEventListener("click", () => {
  calculate("divide");
});
btn_multiply.addEventListener("click", () => {
  calculate("multiply");
});
btn_modulus.addEventListener("click", () => {
  calculate("modulus");
});
btn_clear.addEventListener("click", () => {
  input_a.value = null;
  input_b.value = null;
  answer.textContent = "Your answer!";
});

function calculate(action) {
  let a = input_a.value;
  let b = input_b.value;
  switch (action) {
    case "add":
      answer.textContent = Number(a) + Number(b);
      break;
    case "subtract":
      answer.textContent = a - b;
      break;
    case "divide":
      answer.textContent = a / b;
      break;
    case "multiply":
      answer.textContent = a * b;
      break;
    case "modulus":
      answer.textContent = a % b;
      break;
  }
}

// Mano atveju naudojau vieną funkciją, todėl nenaudojau named bei arrow, bet padariau kad veiktų abi.

// const calculate = (action) => {
// let a = input_a.value;
// let b = input_b.value;
// switch (action) {
//   case "add":
//     answerField.textContent = Number(a) + Number(b);
//     break;
//   case "subtract":
//     answerField.textContent = a - b;
//     break;
//   case "divide":
//     answerField.textContent = a / b;
//     break;
//   case "multiply":
//     answerField.textContent = a * b;
//     break;
//   case "modulus":
//     answerField.textContent = a % b;
//     break;
// }
// };

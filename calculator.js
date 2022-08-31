// addeventlistener to populate "value" when buttons clicked
var allClear = document.querySelector(".allClear")
var deleteNumb = document.querySelector(".deleteNumb")
var decimal = document.querySelector(".decimalBTN")
var equal = document.querySelector(".equalBTN")
var numbers = document.querySelectorAll(".number")
var operators = document.querySelectorAll(".operator")
var value = document.getElementById("value")

numbers.forEach(number => number.addEventListener('click', showNumber));

function showNumber(e){
    value.innerText = e.target.textContent
    console.log(e.target.textContent);
}

// functions for add, subtract, multiply, divide

let addValue = (a, b) => a + b; 
let subtractValue = (a, b) => a - b;
let multiplyValue = (a, b) => a * b; 
let divideValue = (a, b) => a / b; 
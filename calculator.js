// addeventlistener to populate "value" when buttons clicked
let allClear = document.querySelector(".allClear")
let deleteNumb = document.querySelector(".deleteNumb")
let decimal = document.querySelector(".decimalBTN")
let equal = document.querySelector(".equalBTN")
let numbers = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operator")
let value = document.getElementById("value")

// store number into value "a" or value "b" 
let numbSelected = 0
let a = ""
let b = ""

numbers.forEach(number => number.addEventListener('click', showNumber));

function showNumber(e){
    value.innerText = e.target.textContent
    numbSelected++
    if (numbSelected == 1) {
        var a = e.target.textContent
        console.log("this is value a= " + a); 
    } else if (numbSelected == 2){
        var b = e.target.textContent
        numbSelected = 0 
        console.log("this is value b= " + b);
    };
};

// functions for add, subtract, multiply, divide
let addValue = (a, b) => a + b; 
let subtractValue = (a, b) => a - b;
let multiplyValue = (a, b) => a * b; 
let divideValue = (a, b) => a / b; 

// create operate function that takes 2 numbers then calls above functions
// add = 1, subtract = 2, multiply = 3, divide = 4
// when click operand, change operatorSelected to 1,2,3,4 
let operatorSelected = 0 

operators.forEach(operator => operator.addEventListener('click', selectOperand));

function selectOperand(e){
    let clickedOperand = e.target.textContent
    if (clickedOperand == "+") {
        operatorSelected = 1
    } else if (clickedOperand == "-") {
        operatorSelected = 2
    } else if (clickedOperand == "*") {
        operatorSelected = 3
    } else if (clickedOperand == "/") {
        operatorSelected = 4
    };
    console.log(operatorSelected);
};

switch (operatorSelected) {
    case 1:
        addValue(a,b);
        console.log(addValue);
        break;
    case 2:
        subtractValue(a,b);
        console.log(subtractValue);
        break;
    case 3:
        multiplyValue(a,b);
        console.log(multiplyValue);
        break;
    case 4:
        divideValue(a,b);
        console.log(divideValue);
        break; 
    default:
        console.log("default");
        break;
}
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
    if (numbSelected == 0) {
        a += e.target.textContent
        parseFloat(a)
        value.innerText = a
        console.log("value of a= " + a); 
    } else if (numbSelected == 1){
        b += e.target.textContent
        parseFloat(b)
        value.innerText = b
        console.log("value of b= " + b);
    };
};

// functions for add, subtract, multiply, divide
let addValue = (a, b) => +a + +b; 
let subtractValue = (a, b) => a - b;
let multiplyValue = (a, b) => a * b; 
let divideValue = (a, b) => (a / b); 

// create operate function that takes 2 numbers then calls above functions
// add = 1, subtract = 2, multiply = 3, divide = 4
// when click operand, change operatorSelected to 1,2,3,4 
// value of "a" needs to wait until operator clicked, then can be stored value b = (more than two digits)
let operatorSelected = 0
let calculatedValue = 0 

operators.forEach(operator => operator.addEventListener('click', selectOperator));

function selectOperator(e){
    let clickedOperator = e.target.textContent
    if (clickedOperator== "+") {
        operatorSelected = 1
    } else if (clickedOperator == "-") {
        operatorSelected = 2
    } else if (clickedOperator == "*") {
        operatorSelected = 3
    } else if (clickedOperator == "/") {
        operatorSelected = 4
    };
    numbSelected = 1;
    console.log(operatorSelected);
};

equal.addEventListener('click', operate)

function operate() {
    switch (operatorSelected) {
        case 1:
            calculatedValue = addValue(a,b);
            console.log(calculatedValue);
            break;
        case 2:
            calculatedValue = subtractValue(a,b);
            console.log(calculatedValue);
            break;
        case 3:
            calculatedValue = multiplyValue(a,b);
            console.log(calculatedValue);
            break;
        case 4:
            if (b == 0) {
                a = ""
                numbSelected = 0
                b = ""
                return value.innerText = "I cannot!"
            } else {
                calculatedValue = divideValue(a,b)
            }
            console.log(calculatedValue);
            break; 
        default:
            console.log("default");
            break;
    };

    value.innerText = calculatedValue; 
    a = calculatedValue; 
    numbSelected = 1; 
    b = ""

    console.log("new value a=" + a);
    console.log("new value numbSelected " + numbSelected);  

};

// all clear button 
allClear.addEventListener('click', clearCalculator)

function clearCalculator() {
    value.innerText = ""
    numbSelected = 0
    a = ""
    b = ""
    hasDecimalValueA = false;
    hasDecimalValueB = false; 
    console.log("cleared value of a=" + a)
    console.log("cleared value of b=" + b)
    console.log("new value numbSelected= " + numbSelected)
};

// decimal point do a (if calculatedValue =/= whole digit)
decimal.addEventListener('click', addDecimal)
let hasDecimalValueA = false
let hasDecimalValueB = false

function addDecimal(e){
    if (hasDecimalValueA == false && numbSelected == 0) {
        a += e.target.textContent
        value.innerText = a; 
        hasDecimalValueA = true; 
        console.log("decimal value of a=" + a) 
    } else if (hasDecimalValueB == false && numbSelected == 1) {
        b += e.target.textContent
        value.innerText = b; 
        hasDecimalValueB = true; 
        console.log("decimal value of b=" + b)   
    } else if (hasDecimalValueA == true || hasDecimalValueB == true) {
        return; 
}
};

// 12 + 7 - 5 * 3 = 42 should be functional.

// show up to 10 decimal places

// backspace button 
deleteNumb.addEventListener('click', backspace)
let aString = ""
let bString = ""

function backspace() {
    if (numbSelected == 0) {
        let aString = a.toString(); 
        a = aString.slice(0, aString.length - 1); 
        value.innerText = a 
        console.log("new value of delted a=" + a)
        return a
    } else if (numbSelected == 1) {
        let bString = b.toString(); 
        b = bString.slice(0, bString.length - 1); 
        value.innerText = b 
        console.log("new value of deleted b=" + b)
        return b; 
    }
}
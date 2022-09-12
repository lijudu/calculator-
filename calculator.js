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
// 12 + 7 - 5 * 3 = 42 should be functional.
let operatorSelected = 0
let calculatedValue = 0 
let secondClick = false

operators.forEach(operator => operator.addEventListener('click', selectOperator));


function selectOperator(e){
    if (secondClick == false) {
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
        numbSelected = 1
        secondClick = true
    } else if (secondClick == true) {
        equalOperate()
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
        numbSelected = 1
    }
};


equal.addEventListener('click', equalOperate)


function operate() {
    switch (operatorSelected) {
        case 1:
            calculatedValue = addValue(a,b);
            a = calculatedValue; 
            numbSelected = 1; 
            b = ""
            break;
        case 2:
            calculatedValue = subtractValue(a,b);
            a = calculatedValue; 
            numbSelected = 1; 
            b = ""
            break;
        case 3:
            calculatedValue = multiplyValue(a,b);
            a = calculatedValue; 
            numbSelected = 1; 
            b = ""
            break;
        case 4:
            if (b == 0) {
                calculatedValue = "I cannot!"
                disableBtn()
                return 
            } else if (b !== 0) {
                calculatedValue = divideValue(a,b);
                a = calculatedValue
                numbSelected = 1; 
                b = ""
                secondClick = false
            }
            break; 
        default:
            console.log("default");
            break;
    };

};

function showValue() {
    value.innerText  = +calculatedValue.toFixed(10)
};


function equalOperate() {
    operate()
    showValue()
};

function disableBtn() {
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("six").disabled = true;
    document.getElementById("seven").disabled = true;
    document.getElementById("eight").disabled = true;
    document.getElementById("nine").disabled = true;
    document.getElementById("zero").disabled = true;
    document.getElementById("decimal").disabled = true;
    document.getElementById("divide").disabled = true;
    document.getElementById("multiply").disabled = true;
    document.getElementById("subtract").disabled = true;
    document.getElementById("add").disabled = true;
    document.getElementById("equal").disabled = true;
    document.getElementById("deleteBTN").disabled = true;
}

// all clear button 
allClear.addEventListener('click', clearCalculator)

function clearCalculator() {
    value.innerText = ""
    numbSelected = 0
    a = ""
    b = ""
    hasDecimalValueA = false;
    hasDecimalValueB = false; 
    secondClick = false
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = false;
    document.getElementById("four").disabled = false;
    document.getElementById("five").disabled = false;
    document.getElementById("six").disabled = false;
    document.getElementById("seven").disabled = false;
    document.getElementById("eight").disabled = false;
    document.getElementById("nine").disabled = false;
    document.getElementById("zero").disabled = false;
    document.getElementById("decimal").disabled = false;
    document.getElementById("divide").disabled = false;
    document.getElementById("multiply").disabled = false;
    document.getElementById("subtract").disabled = false;
    document.getElementById("add").disabled = false;
    document.getElementById("equal").disabled = false;
    document.getElementById("deleteBTN").disabled = false;
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
};


// show up to 12 digits
// add keyboard support
// maybe put in icons instead of keys? make it look nicer 
// clean up code 







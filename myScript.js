//function to add numbers
const add = (sum, number2) => Number(sum) + Number(number2);
//function to subtract numbers
const subtract = (sum, number2) => sum - number2;
//function to multiply numbers
const multiply = (sum, number2) => sum * number2;
//function to divide numbers
const divide = (sum, number2) => sum / number2;
//function to do percentage of 2 numbers
const percent = (sum, number2) => (sum * number2) / 100;
//function to call the above functions
function operate(operator, sum, number2) {
    switch (operator) {
        case 'add':
            return add(sum, number2);
        case 'subtract':
            return subtract(sum, number2);
        case 'multiply':
            return multiply(sum, number2);
        case 'divide':
            return divide(sum, number2);
        case 'percent':
            return percent(sum, number2);
    } 
}
//count variable is to disbaling a button to be clicked two times in a row.
let count = 0;

//function to store the value of the number from the user
const number = document.querySelectorAll('.number');
const screenText = document.querySelector('.display-screen');
let sumText = '';
let sumValue;
let sumValue2 = 0;
let operatorStore;
let total = 0;
number.forEach((element) => {
    element.addEventListener("click", function() {
        if (screenText.innerHTML.length < 9) {
            sumText = sumText + `${element.getAttribute('alt')}`;
            screenText.innerHTML = sumText;
            sumValue = sumText;
            count = 0;
            console.log(sumValue)
        } else {
            screenText.innerHTML = 'E+';
        }       
    })
})

//constant operators
const operators = document.querySelectorAll('.operate');
operators.forEach((element) => {
    element.addEventListener('click', function() {
        sumText = "";
        if (sumValue2 == 0) {
            sumValue2 = sumValue;
        } else {
            total = operate(operatorStore, sumValue2, sumValue);
            sumValue2 = total;
            screenText.innerHTML = Math.round(total * 100) / 100;
        }
        operatorStore = element.getAttribute('alt');
        count = 0;
        
        console.log("sumValue: " + sumValue)
        console.log("sumValue2: " + sumValue2)
        console.log("sumText: " + sumText)
    })
})

//The equal key functionnality
const equal = document.querySelector('.equal');
equal.addEventListener('click', function() {   
    if (count == 0) {
        if (total == 0) {
            total = operate(operatorStore, sumValue2, sumValue);
        } else {
            total = operate(operatorStore, total, sumValue)
        }
        screenText.innerHTML = Math.round(total * 100) / 100;
        if (total > 100000000) {screenText.innerHTML = 'E+'}
        count = 1;
        if (total === undefined) {
            screenText.innerHTML = '?Really';
            total = 0;
        }
        console.log("TOTAL: " + total)
        console.log(total.length)
    }
})

//The clear key functionnality
const clear = document.querySelector('.clear');
clear.addEventListener('click', function() {
    total = 0;
    sumValue = 0;
    sumValue2 = 0;
    screenText.innerHTML = "0";
    count = 0;
    operatorStore = '';
    sumText = "";
})

//The SOLEIL key functionnality
const sun = document.querySelector('.sun');
sun.addEventListener('click', function() {
    total = 0;
    sumValue = 0;
    sumValue2 = 0;
    count = 0;
    operatorStore = '';
    sumText = "";
    screenText.innerHTML = "713705";
})

//The backspace key functionnality
const backspace = document.querySelector('.erase');
backspace.addEventListener('click', function() {
    total = 0;
    sumValue = 0;
    sumValue2 = 0;
    screenText.innerHTML = "0";
    count = 0;
    operatorStore = '';
    sumText = "";
})
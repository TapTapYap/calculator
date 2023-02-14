// Operator buttons from HTML are connected to variables and assigned an event listener
// that calls a function when they are clicked.

const operationButtons = document.querySelectorAll('.opBtn');
const numberButtons = document.querySelectorAll('.numBtn');

const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', add());

const subtractBtn = document.querySelector('.subtractBtn');
subtractBtn.addEventListener('click', subtract());

const multiplyBtn = document.querySelector('.multiplyBtn');
multiplyBtn.addEventListener('click', multiply());

const divideBtn = document.querySelector('.divideBtn');
divideBtn.addEventListener('click', divide());

const equalsBtn = document.querySelector('.equalsBtn');
equalsBtn.addEventListener('click', operate());

const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', clear());

// Performs addition on the values it is given.

function add(e) {
    
}

// Performs subtraction on the values it is given.

function subtract() {

}

// Multiplies on the values it is given.

function multiply() {

}

// Divides any of the values it is given.

function divide() {

}

// Calls on the functions connected to the operators to find the value
// of the numbers given.

function operate() {

}

// Clears all values being stored and wipes the display clean so the user
// can start over.

function clear() {

}
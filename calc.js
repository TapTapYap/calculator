class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }
}

// Operator buttons from HTML are connected to variables and assigned an event listener
// that calls a function when they are clicked.

const operationButtons = document.querySelectorAll('[data-operation]');
const numberButtons = document.querySelectorAll('[data-number]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

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
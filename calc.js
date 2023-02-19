class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }

    clear () {

    }

    delete() {

    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

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

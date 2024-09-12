const display = document.getElementById('display');
let expression = "";

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function calculateResult() {
        if (expression.includes('/0')) {
            display.value = 'Division by zero is not allowed';
        } else {
            const result = eval(expression);
            display.value = result;
            expression = result.toString(); 
        }
    } 

function clearDisplay() {
    expression = "";
    display.value = "";
}

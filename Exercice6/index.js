const display = document.getElementById('display');
let expression = "";
const symbols = ['+', '-', '*', '/'];

function appendToDisplay(value) {
    if (display.value === 'Division by zero is not allowed') {
        expression = "";
        display.value = "";
    }

    if (symbols.includes(value)) {
        if (expression === "") {
            expression = "0" + value;
        } 
        else if (symbols.includes(expression.slice(-1))) {
            expression = expression.slice(0, -1) + value;
        } else {
            expression += value;
        }
    } else {
        if (expression === "0" && value === "0") {
            return;
        }
        if (expression === "0" && value !== "0") {
            expression = value;
        } else {
            if (expression.split(/[\+\-\*\/]/).pop() === "0" && symbols.includes(expression.slice(-2, -1))) {
                expression = expression.slice(0, -1) + value;
            } else {
                expression += value;
            }
        }
    }

    display.value = expression;
}

function calculateResult() {
    if (expression.includes('/0')) {
        display.value = 'Division by zero is not allowed';
    } else {
        try {
            const result = eval(expression);
            display.value = result;
            expression = result.toString();
        } catch (e) {r
            display.value = "Error";
        }
    }
}

function clearDisplay() {
    expression = ""; 
    display.value = ""; 
}


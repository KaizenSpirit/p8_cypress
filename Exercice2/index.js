function calculate(num1, num2, operator) {

  num1 = Number(num1);
  num2 = Number(num2);

  if (isNaN(num1) || isNaN(num2)) {
    return 'Both arguments must be valid numbers';
  }

  if (typeof operator !== 'string' || !['+', '-', '*', '/'].includes(operator)) {
    return 'Invalid operator';
  }

  switch(operator) {
    case '+':
        return num1 + num2;
    case '-':
        return num1 - num2;
    case '*':
          return num1 * num2;
    case '/':
        if (num2 === 0) {
            return 'Division by zero is not allowed';
        }
        return num1 / num2;
    default:
        return 'Invalid operator';
    }
}

export default calculate;


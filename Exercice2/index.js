function calculate(num1, num2, operator) {
  // Convertir les paramètres en nombres au cas où ils sont passés comme chaînes
  num1 = Number(num1);
  num2 = Number(num2);

  // Vérifier l'opérateur et effectuer l'opération correspondante
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

// Export de la fonction pour qu'elle puisse être utilisée dans le fichier de test
export default calculate;


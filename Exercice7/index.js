function convertToBinary() {
  const decimalInput = document.getElementById('decimalInput').value;
  
  // Vérifier si l'entrée est un nombre entier valide
  if (isNaN(decimalInput) || decimalInput.trim() === "" || decimalInput.includes('.') || decimalInput < 0) {
      // Si ce n'est pas un nombre valide, on vide le résultat
      document.getElementById('binaryResult').textContent = "";
      return;
  }

  // Convertir l'entrée en entier puis en binaire
  const decimalNumber = parseInt(decimalInput, 10);
  const binaryResult = decimalNumber.toString(2);

  // Afficher le résultat binaire
  document.getElementById('binaryResult').textContent = binaryResult;
}

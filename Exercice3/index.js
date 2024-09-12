function calculateAverage(numbers) {
  // Vérifier si le tableau est vide ou non défini
  if (!numbers || numbers.length === 0) {
      return 'No numbers to calculate average';
  }

  // Convertir chaque élément en nombre si ce n'est pas déjà le cas
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += Number(numbers[i]);
  }

  // Calculer la moyenne
  const average = sum / numbers.length;

  return average;
}

export default calculateAverage;


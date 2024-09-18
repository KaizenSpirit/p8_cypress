function calculateAverage(numbers) {
  if (!numbers || numbers.length === 0) {
      return 'No numbers to calculate average';
  }

  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(Number(numbers[i]))) {
        return 'All elements must be valid numbers';
  }
}

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += Number(numbers[i]);
  }

  return sum / numbers.length;
}

export default calculateAverage;


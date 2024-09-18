function pairNumbers(min, max) {
 
  min = Number(min);
  max = Number(max);

  if (isNaN(min) || isNaN(max)) {
    return 'Les arguments min et max doivent être des nombres.';
  }

  let result = [];

  for (let i = min; i <= max; i++) {
      if (i % 2 === 0) {
          result.push(i);
      }
  }

  return result.join(',');
}

export default pairNumbers

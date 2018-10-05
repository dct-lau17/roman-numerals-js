const UNITS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

function romanNumerals(num){
  return UNITS[num - 1];
}

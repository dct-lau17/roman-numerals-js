const UNITS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
const TENS = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']

function romanNumerals(num){
  if(num < 10){
    return _units(num)
  }else{
    return _tens(num)
  }
}

function _units(num){
  return UNITS[num - 1];
}

function _tens(num){
   if(num === 10){
     return TENS[0]
   }
}

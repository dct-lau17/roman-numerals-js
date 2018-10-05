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
  var tens = Math.floor(num/10)
  var str = ''
  str += TENS[tens - 1]
  if(!_isDivisible(num, 10)){
    str += _units(num % 10)
  }
return str
}

function _isDivisible(num, divisor){
  return num % divisor === 0
}

const UNITS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
const TENS = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
const HUNDREDS = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];

function romanNumerals(num){
  if(num < 10){
    return _units(num)
  }else if(num < 100){
    return _tens(num)
  }else{
    return _hundreds(num)
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

function _hundreds(num){
  var hundreds = Math.floor(num / 100)
  var str = ''
  str += HUNDREDS[hundreds - 1]
  if(!_isDivisible(num, 100)){
    num % 100 > 9 ? str += _tens(num % 100) : str += _units(num % 100)
  }

  return str
}

function _isDivisible(num, divisor){
  return num % divisor === 0
}

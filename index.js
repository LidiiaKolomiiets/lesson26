const numberToCheck = '123456';
function is6DigitNumber (num){
    return /^-?[1-9]\d{5}$/.test(num)
}
console.log(is6DigitNumber(numberToCheck))
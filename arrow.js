function sum(number1, number2) {
    return number1 + number2
}
const result = sum(10, 12)
console.log(result)
// Arrow function 
const sum1 = (number3, number4) => {
    return number3 + number4
}
const result2 = sum1(16, 13)
console.log(result2)

// short arrow function 
const sum2 = (number4, number5, number6 = 10) => number4 + number5 + number6;
const result3 = sum2(6, 5)
console.log(result3)
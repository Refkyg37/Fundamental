function multiplier (factor ,number){
    return number * factor
}
console.log(multiplier(5 ,3));  // 15
console.log(multiplier(10, 3));  //30

// =========================================== //

function multiplier (factor) {
    return function (number) {
        return number * factor 
    }
}
const mul3 = multiplier(3)
const mul5 = multiplier(5)
console.log(mul3(3)) //15
console.log(mul5(3)) //30
// contoh soal 
// function triangle(height){
//     for (let i = 1; i<=height; i++){
//         let res = ""
//         for (let j= 1; j <=i; j++){
//             res+=`${j}`
//         }
//         console.log(res)
//     } 
// }

// triangle(5);

// no .1

// function triangle(height){
//     let counter = 0
//     for (let i = 1; i <= height; i++){
//         let res = "";
//         for (let j = 1; j <=i; j++){
//             counter++
//             res+= `${counter < 10 ? " 0" : " "}${counter}`;
//         }
//         console.log(res)
//     }
// }

// triangle(5);

// No.2

// function fizzbuzz(n) {
//     let res = []

//     for (let i = 1; i <= n; i++){
//         if (i % 3 === 0 && i % 5 === 0) {
//             res.push("FizzBuzz")
//         }else if (i % 3 === 0) {
//             res.push("Fizz")
//         }else if (i % 5 === 0){
//             res.push("Buzz")
//         } else {
//             res.push(i)
//         }
//     }
//     return res.join(", ")
// }

// console.log(fizzbuzz(15))

// No.3

// function bmi(weight , hight) {
//     let score = weight / hight ** 2
//     let res = ""

//     if (score < 18.5){
//         res = "les weight"
//     } else if (score >= 18.5 && score <= 24.9){
//         res = "ideal"
//     } else if (score >= 25 && score <= 29.9){
//         res = "overweight"
//     } else if (score >= 30 && score <= 39.9){
//         res = "very overweight"
//     }else {
//         res = "obesity"
//     }
//     return res
// }

// console.log(bmi(60, 1.65))

// no.4

// function even(arr){
//     return arr.filter((item) => item % 2 === 0)
// }

// let num = [1, 2, 3 ,4 ,5, 6, 7 ,8 , 9, 10]

// console.log(even(num))



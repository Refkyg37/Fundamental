// No.1
// const input = 9;
// const input1 = 1;

// for( let i =1; i <= input; i++) {
//     console.log(`1 * ${i} = ${input1 * i}`)
// }

// No.7
// const word = "hello"
// let reverseWord

// for (let i = word.length -1; i >= 0; i--) {
//     console.log(word.charAt(i))
// }

// No.3
// const cm = 100000
// const km = cm/1000
//  console.log(km , "km") 

// No.4
// const rupiah = (number)=>{
//     return new Intl.NumberFormat("id-ID", {
//       style: "currency",
//       currency: "IDR"
//     }).format(number);
//   }

// console.log(rupiah(1000)) 

// No.5
// const word = 'Hello World';
// const searchStr = 'ell';

// console.log(word.replace("ell", ""))

// No.6
// const world = "hello world"
// let isCapital = true
// let result = ""

// for (let i = 0; i < world.length; i++){
//     if (isCapital == true) {
//         result += world.charAt(i).toUpperCase()
//         isCapital = false
//     } else {
//         result += world.charAt(i).toLowerCase()
//     } 
//     if (world.charAt(i) == " ") {
//         isCapital = true
//     }
// }
// console.log(result)

// No.2
// const word = "madam"
// let reverseWord = ""

// for (let i = word.length -1; i >= 0; i--){
//     reverseWord += word.charAt(i)
// }

// if (word === reverseWord) {
//     console.log(`${word} is palindrome`)
// } else {
//     console.log(`${word} is not palindrome`)
// }


// No.8
// const character1 = 'The QuiCk BrOwN Fox'
// let result =""

// for(let i = 0; i<= character1.length; i++){
//     const letter = character1.charAt (i)

//     if(letter == letter.toUpperCase()){
//         result += letter.toLowerCase()
//     }else {
//         result += letter.toUpperCase()
//     }
// }
// console.log(character1)
// console.log(result)

// No.9
// const num1 = 42
// const num2 = 27

// console.log(num1 > num2 ? num1 : num2)

// No .10

// let a = 42
// let b = 27
// let c = 18

// if (a > b) {
//     let d = a
//     a = b
//     b = d
// }

// if (b > c) {
//     let d = b
//     b = c
//     c = d
// }

// if (a > b) {
//     let d = a
//     a = b
//     b = d
// }

// console.log(a, b , c)

// no .11

// const input = "hello"
// const type =  typeof input

// console.log (type)
// console.log (type == "string" ? 1 : type == "number"? 2:3)

// no .12

// const word = " An apple a day keeps the doctor away"

// console.log(word.toLowerCase().replaceAll("a","*"))


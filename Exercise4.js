// No1

// function Array(arr) {
//     arr.sort(function(a, b) {
//         return a - b;
//     });

//     let min = arr[0];
//     let max = arr[arr.length - 1];
//     let total = arr.reduce(function(a, b) {
//         return a + b;
//     }, 0);

//     let average = total / arr.length;
//     return { lowest: min, highest: max, "average": average };
// }

// let arr = [12, 5, 23, 18, 4, 45, 32];
// console.log(Array(arr)); 


// NO.2

// function Array(arr) {
//     if (arr.length === 0) {
//         return "";
//     } else if (arr.length === 1) {
//         return arr[0];
//     } else {
//         let result = arr.slice(0, -1).join(", ") + " and " + arr[arr.length - 1];
//         return result;
//     }
// }

// let arr = ["apple", "banana", "cherry", "date"];
// console.log(Array(arr)); 
// simple No.2
// function concat(arr){
//     const fruit = arr.pop()

//     return arr.join(", ") + " and " + fruit
// }

// console.log(concat(["apple","banana","cherry","date"]))

// NO.3

// function String(string) {
    
//     return string.split(" ");
// }

// let A = "Hello World";
// console.log(String(A));

//No.4

// function Array(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return ;
//     }
    
//     let A = [];
//     for (let i = 0; i < arr1.length; i++) {
//         A.push(arr1[i] + arr2[i]);
//     }
    
//     return A;
// }

// let arr1 = [1, 2, 3];
// let arr2 = [3, 2, 1];
// console.log(Array(arr1, arr2));

// NO.5

// function AddElement(arr, NewElement) {
//     if (!arr.includes(NewElement)) {  //! = legacy
//         arr.push(NewElement);
//     }
//     return arr;
// }

// let arrA = [1, 2, 3, 4];
// let NewElementA = 4;
// console.log(AddElement(arrA, NewElementA)); 

// let arrB = [1, 2, 3, 4];
// let NewElementB = 7;
// console.log(AddElement(arrB, NewElementB)); 

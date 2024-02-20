// Array destructuring

let arr = [1 , 2, 3]
let [a, b , c] = arr

console.log(a);

//object detructuring
let person = {
    name: "John",
    age: 20
}

let {age, name} = person

console.log(name)
console.log(age)


//spread oprator ...

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1,...arr2]
console.log(arr3)

const data1 = {
    name: "Andi",
};

const data2 ={
    email:"andi@gmail.com",
}

const data3 ={
    
}
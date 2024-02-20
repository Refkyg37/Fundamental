// let user2 = new Object()

// let user = {
//     name : "David",
//     greet() {
//         console.log("Hello!")
//     }
// }

// // console.log(greet)





// let person = {
//     name: "Frangky",
//     age : 26,
// };

// person.hobby = "coding"
// person.age = 20
// person.name = "John"

// dalete person.hobby

// console.log(person)
// console.log(person.name)
// console.log(person ["name"])

let person2 ={
    name : "Budi",
    age: 25,
    address: {
        city:"Bandung",
        country: "Indonesia"
    }
}
let item = "name"
// console.log(person2)
// console.log(person2.address)
// console.log(person2.address?.city)

// console.log(Object.keys(person2))

// for (let key in person2) {
//     console.log(person2[key])
// }

console.log(Object.keys(person2))

for (let key in person2) {
    // console.log(key)
    console.log(person2[key])
}



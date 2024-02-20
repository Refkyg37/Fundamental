// class Product {
//     name = ""
//     price = 0

//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }
// }

// const product1 = new Product ("Apple", 4000)
// const product2 = new Product ("Orange", 2000)
// const product3 = new Product ("melon", 10000)
// const product4 = new Product ("banana", 20000)

// class Transaction {
//     #total = 0
//     products = []

//     addToCart(item,qty) {
//         item.qty = qty
//         this.products.push(item)
//     }
//     getTotal(){
//         this.products.forEach((item) => {
//             this.#total += item.price * item.qty
//             console.log(`${item.name} * ${item.qty} = ${item.price * item.qty}`)
//         })
//         console.log(`------------------------`)
//         console.log(`Total : ${this.#total}`)
//     }

//     checkout(money) {
//         if (money < this.#total) {
//             throw new Error("Uang anda tidak cukup")
//         } else {
//             console.log(`Cash : ${money}`)
//             console.log(`Return : ${money - this.#total}`)
//             console.log(`-------mongo------`)
//         }
//     }
// }

// const Transaction1 = new Transaction()
// Transaction1.addToCart(product1, 2)
// Transaction1.addToCart(product3, 3)
// Transaction1.getTotal()
// Transaction1.checkout(38000)

// console.log(Transaction1)

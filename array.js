let arr = [1, "Budi" ,true ,4 ,5,6]
let arr2 = new Array(1, 2 , 3 ,4 , 5)

console.log (arr)
console.log (arr2)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
// console.log(arr[4][1])

arr.push(6) //menambahkan value ke dalam array di akhir
console.log (arr)
arr.pop() // menghapus value akhir
arr.unshift(0) //mengeluarkan atau menghapus value awal
console.log(arr)
arr.unshift()
console.log(arr)
// mendapatkan lenght, mengurutkan
console.log (arr.length)

let number = [10 , 5 , 15]

console.log(number.sort((a, b) => a - b)) //asc
console.log(number.sort((a, b) => b - a)) // desc

const world = "hello"
console.log(word.split("").reverse().join(""))

console.log(arr2.concat(number))

console.log(number.filter((item) => item >10))
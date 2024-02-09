let age = 25

if (age >=17) {
    console.log("You can now create an ID Card")
} else {
    console.log("You are not old enough to create an ID Card")
}

let grade = "B"
if (grade === "A") {
    console.log("Excellent Result !")
} else if (grade == "B") {
    console.log("Great Result!")
}

let date = new Date("2024-02-06")
let day = date.getDay ()

console.log(day)

if (day === 0) {
    console.log("Hari Minggu");
}else if (day === 1) {
    console.log("Hari Senin");
}
else if (day === 2) {
    console.log("Hari Selasa");
}
else if (day === 3) {
    console.log("Hari Rabu");
}
else if (day === 4) {
    console.log("Hari Kamis");
}
else if (day === 5) {
    console.log("Hari Jum'at");
}
else if (day === 6) {
    console.log("Hari Sabtu");
}
else if (day === 7) {
    console.log("Hari ,Minggu");
}

switch (day) {
    case 0:
    console.log("Hari Minggu");
    break;
    case 1:
    console.log("Hari Senin");
    break;
    case 2:
    console.log("Hari Selasa");
    break;
    case 3:
    console.log("Hari Rabu");
    break;
    case 4:
    console.log("Hari Kamis");
    break;
    case 5:
    console.log("Hari Jumat");
    break;
    case 6:
    console.log("Hari Sabtu");
    break;
    case 7:
    console.log("Hari Minggu");
    break;
}

// this men that if car value is BMW or TOYOTA should execute the text inside

let car1 = "BMW"()
let car2 = "TOYOTA"()

if (car === "BMW" || car === "TOYOTA") {
    console.log("this car is awesome")
}

const str = "JavaScript";

if (str === "JavaScript") {
    console.log("JavaScript");
} else {
    console.log("not JavaScript");
}

// Ternary operator
console.log(str === "JavaScript" ? "JavaScript" : "not JavaScript");
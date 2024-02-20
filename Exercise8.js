// Parent class Employee

// class Employee {
//     constructor(type, hourlyRate) {
//         this.type = type;
//         this.hourlyRate = hourlyRate;
//         this.workingHours = 0;
//     }

//     addWorkingHour(hours) {
//         this.workingHours += hours;
//     }

//     calculateTotalSalary() {
//         let totalSalary = this.hourlyRate * this.workingHours;
//         if (this.workingHours > 6) {
//             totalSalary = (this.type === "full-time" ? 75000 : 30000) * this.workingHours;
//         }
//         return totalSalary;
//     }
// }

// class FulltimeEmployee extends Employee {
//     constructor() {
//         super("full-time", 100000);
//     }
// }

// class ParttimeEmployee extends Employee {
//     constructor() {
//         super("part-time", 50000);
//     }
// }

// const fulltimeEmployee = new FulltimeEmployee();
// const parttimeEmployee = new ParttimeEmployee();

// fulltimeEmployee.addWorkingHour(8); 
// parttimeEmployee.addWorkingHour(5); 

// console.log("Total salary for full-time employee:", fulltimeEmployee.calculateTotalSalary());
// console.log("Total salary for part-time employee:", parttimeEmployee.calculateTotalSalary());

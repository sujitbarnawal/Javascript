// singleton --> objects created from constructor
// Object.create

//object literals

let student={
    name:"sujit",
    roll:28268,
    email:"sujitbarnawal4545@gmail.com",
    course:"CSIT",
    "college":"ASCOL"
}

// console.log(student.name);
// console.log(student["name"]);

// console.log(student["college"]);
// console.log(student.college);

// let sym = Symbol("wow")
// let obj1={
//     sym:"best"
// }

// console.log(obj1.sym);
// console.log(typeof obj1.sym);// It is string not symbol

// let obj2 = {
//     [sym]: "best"
// }

// console.log(obj2);

// console.log(obj2[sym]);
// console.log(student);
// student.email="sujit@gmail.com"
// console.log(student);
// Object.freeze(student);
// student.email="sujit6666@gmail.com"
// console.log(student);

// student.getName=function(){
//     console.log(`Hello! ${this.name}.`)
// }

// student.getName()


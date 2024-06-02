// Stack and Heap

// Stack is used where we find primitive data types and Heap is used where we find non primitive data types

let name1="sujit"
let name2=name1
console.log(name1);
console.log(name2);

name2="sujan"
console.log(name1);
console.log(name2);  // stack makes copy but heap has same reference


let stu={
    name:"sujit",
    roll:28
}
let stu2=stu
console.log(stu);
console.log(stu2);


stu2.roll=25
console.log(stu);
console.log(stu2);
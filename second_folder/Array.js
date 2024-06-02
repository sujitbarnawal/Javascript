let arr=[1,2,3,4,6]
let newArr=new Array(3,4,5,6,2,12,3,44)

console.log(newArr.length)

// push pop unshift shift

console.log(arr.includes(5))
console.log(arr.indexOf(6))

let arr1=[1,2,3,4,5,6]

console.log(arr1);

console.log(arr1.slice(0,3));
console.log(arr1);

console.log(arr1.splice(0,3));
console.log(arr1);

// Note :- slice doesnot manipulate the string whereas splice manipulate the string

let arrI=["i","ii","iii"]
let arrII=["iv","v","vi"]

arrI.push(arrII)

console.log(arrI);

console.log(arrI[3][2]);

let newArrI=arrI.concat(arrII)
console.log(newArrI);

let newArrII=[...arrI,...arrII]
console.log(newArrII);

let arrIII=[1,2,3,4,[5,6,7,[8,9,10]],11,12,13,[14,[15,[16,[17,18,19]]]],20]

let newarrIII=arrIII.flat(4)

console.log(newarrIII);


console.log(Array.from("Sujit"));

console.log(Array.isArray([1,2,3]));

console.log(Array.isArray(1234));

let name1="sujit"
let name2="kumar"
let name3="barnawal"

console.log(Array.of(name1,name2,name3));

// Note:- object cannot be converted into arrays . we have to mention either keys or values from which array is to be formed


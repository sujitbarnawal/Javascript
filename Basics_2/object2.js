// let user=new Object() // singleton object

// let user={}
// user.name="sujit"
// user.address="Ktm"
// user.college="Ascol"

// console.log(user);

// let user = {
//     name: "sujit",
//     address: "Ktm",
//     college: {
//         cname: "Ascol",
//         no_of_students: 1000
//     }
// }
// // console.log(user);
// console.log(user.college);
// console.log(user.college.no_of_students);

// let object1={
//     1:"a",
//     2:"b"
// }
// let object2={
//     3:"c",
//     4:"d"
// }

// let newObj=Object.assign(object1,object2)
// let newObject=Object.assign({},object1,object2)

// console.log(newObj);
// console.log(newObject);

// let obj3={...object1,...object2}
// console.log(obj3);

// let arrKey=Object.keys(user)
// let arrvalue=Object.values(user)
// console.log(arrKey);

// let arrEntries=Object.entries(user)
// console.log(arrEntries);

// console.log(user.hasOwnProperty("address"));
// console.log(user.hasOwnProperty("course"));

// Destructuring of Objects

let objecctA={
    sName:"sujit",
    sNddress:"Ktm",
    sRoll:24
}

let {sName,sRoll}=objecctA
console.log(sName,sRoll)
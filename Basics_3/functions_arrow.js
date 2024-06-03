let student = {
    name: "sujit",
    roll: 222,
    message: function () {
        // console.log(`${this.name}, your roll is ${this.roll}`);
        // console.log(this);
    }
}

// student.message()
// student.roll = 234
// student.message()

// console.log(this);

// function sayName(){
    // let name="sujit"
    // console.log(this);
    // console.log(this.name);
// }
// // sayName()



// const sayUserName=()=>{
//     let username="Sujit"
//     console.log(`Hello! ${username}`);
// }
// sayUserName()



// const sum=(n1,n2)=>{
//     return n1+n2
// }
// console.log(sum(1,2));



const sum=(n1,n2)=> (n1+n2)
console.log(sum(1,2));


const sayMyName =()=>({username:"Sujit"})
console.log(sayMyName())
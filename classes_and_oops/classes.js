// class user{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }

//     encryptPass(){
//         return `su${this.password}al`
//     }

//     captUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// let user1= new user("sujit","sujitbarnawal4545@gmail.com","0000")
// console.log(user1.encryptPass());
// console.log(user1.captUserName());


// Before class was introduced

function user(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

user.prototype.encrptPass=function(){
    return `su${this.password}al`
}

user.prototype.captUserName=function(){
    return `${this.username.toUpperCase()}`
}

let user2=new user("ankit","ankit@gmail.com","321")

console.log(user2.encrptPass());
console.log(user2.captUserName());
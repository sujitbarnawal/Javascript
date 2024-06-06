let user={
    username:"sujit",
    loginCount:3,
    signedIn:true,
    getUserDetails: function(){
        // console.log("Done");
        // console.log(this.username);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.sayHello= function(){
        console.log("Hello ",this.username);
    }

    return this
}

let user1= new User("sujit",3,true)
let user2= new User("sujan",5,false)

// console.log(user1);
// console.log(user2);

// console.log(user1.sayHello());

console.log(user1.constructor);

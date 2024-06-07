function setUserName(username){
   this.username=username
}

function createUser(username,email,password){
    // setUserName(username)// this doesnot hold the reference
    setUserName.call(this,username)
    this.email=email
    this.password=password
}

let user1=new createUser("sujit","sujitbarnawal4545@gmail.com","1234")
console.log(user1);
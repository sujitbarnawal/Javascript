class user{
    constructor(username){
        this.username=username
    }

    isLogged(){
        console.log(this.username);
    }

    static createId(){
        return `898494`
    }
}

let user1= new user("hitesh")
// console.log(user1.createId());

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

let teach1= new teacher("sujit","s@gmail.com")
teach1.isLogged()

console.log(teach1.createId());
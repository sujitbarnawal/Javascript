class user{
    constructor(username){
        this.username=username
    }

    isLogged(){
        console.log(this.username);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password

    }

    newCourse(){
        console.log(`New course is taken by ${this.username}`);
    }
}

 let Teacher1=new Teacher("sujit","sss@gmail.com","23")

 console.log(Teacher1);
 Teacher1.newCourse();

 console.log(Teacher1===Teacher);
 console.log(Teacher1 instanceof Teacher);
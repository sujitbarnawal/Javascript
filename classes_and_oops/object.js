function multiplyByFive(num){
    return num*5
}

multiplyByFive.power=2
// console.log(multiplyByFive(5));
// console.log(multiplyByFive.power);
// console.log(multiplyByFive.prototype);

// JS is a prototype based language


function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score=this.score+10
}
createUser.prototype.printScore=function(){
    console.log(`Your score is ${this.score}`);
}

let user1=new createUser("sujit",60)
let user2=new createUser("ankit",80)

user1.increment()
console.log(user1);
user2.printScore()

//prototype creation
let heros = ["Superman", "Spiderman"]

let heroPowers = {
    Superman: "punch",
    Spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spiderman Power is ${this.Spiderman}`);
    }
}

Object.prototype.sujit = function () {
    console.log("sujit is in all objects");
}

// heroPowers.sujit()

// heros.sujit()

// heroPowers.getSpiderPower.sujit()

Array.prototype.helloSujit = function () {
    console.log("Hello Sujit");
}

// heros.helloSujit()


// Inheritance

let user={
    name:"sujit",
    email:"sujitbarnawal4545@gmail.com"
}

let teacher = {
    makeVideo: true
}

let teachingSupport = {
    isAvailable: false
}

let taSupport = {
    makeAssignment: "JS",
    fullTime: true,
    __proto__: teachingSupport
}

// console.log(taSupport.isAvailable);

teacher.__proto__ = user

// console.log(teacher.name);

Object.setPrototypeOf(teachingSupport,user)

// console.log(teachingSupport.email)



// Make a prototype which returns the exact length excluding the unnecessary white spaces

let myname="sujit    "

String.prototype.trueLength=function(){
     console.log(`${this.trim().length}`);
}
console.log(myname.length)
myname.trueLength()

"sujit kumar Banrnawal".trueLength()

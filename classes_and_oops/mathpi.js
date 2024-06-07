let descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI=4
// console.log(Math.PI);

let obj = {
    name: 'sujit',
    score: 60,

    invalid: function () {
        console.log("Invalid");
    }
}

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

Object.defineProperty(obj, "name", {
    // writable:false,
    // enumerable:false,
    // configurable:false

    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// console.log(obj.name);
// obj.name="ankit"
// console.log(obj.name);


for (let [key, value] of Object.entries(obj)) {
    if (typeof value !== "function") {
        console.log(`${key}:${value}`);
    }
}




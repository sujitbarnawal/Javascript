// for of loop

let arr=[1,2,3,4,5]

for (const iterator of arr) {
    // console.log(iterator);
}

let string="sujit"

for (const iterator of string) {
    // console.log(iterator);
}

// Maps

let map=new Map()

map.set("NP","Nepal")
map.set("IN","INDIA")
map.set("AUS","AUSTRALIA")

// console.log(map);
// console.log(map.keys());
// console.log(map.values());

for (const [key,value] of map) {
    // console.log(key,"-",value);
}

// for of loop doesnot work for objects 


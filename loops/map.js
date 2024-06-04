let num = [1, 2, 3, 4, 5, 6, 7]

let newNums = num.map((item) => item ** 2)
// console.log(newNums);


let newnums = []
num.forEach((item) => {
    newnums.push(item ** 2)
})
// console.log(newnums);

// chaining (chaining limit is infinite)
let new_nums = num
    .map((item) => { return item ** 2 })
    .map((item) => { return item + 1 })
    .filter((item)=>{return item>=15})

console.log(new_nums);


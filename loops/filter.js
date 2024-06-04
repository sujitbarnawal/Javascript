// forEach loop cannot return items

//filter

let num=[1,2,3,4,5,6,7,8,9,10]

// let largeNum=num.filter((item)=>item>4)
// console.log(largeNum);


let BigNums=num.filter((item)=>{
    return item>7
})
// console.log(BigNums);

let newNums=[]
num.forEach((item)=>{
    if(item>5){
        newNums.push(item)
    }
})
// console.log(newNums);



let num = [1,2,3,4,5]

let newNums=num.reduce((sum,num)=>{
    // console.log(`sum=${sum} and num=${num}`);
    return sum+num
},0)
// console.log(newNums);


let courseShop=[
    {
        courseName:"Web Development",
        price:1999
    },
    {
        courseName:"Data Science",
        price:2999
    },
    {
        courseName:"Dev Ops",
        price:3999
    }
]

let totalCoursePrice=courseShop.reduce((sum,item)=>{
    return sum+item.price
},0)
console.log(totalCoursePrice);

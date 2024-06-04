let arr=["C","C++","Javascript","Python","Java"]

arr.forEach(e => {
    // console.log(e);
});

arr.forEach( function (e){
    // console.log(e);
})

function showCLanguage(name){
    // console.log(name);
}

arr.forEach(showCLanguage)

arr.forEach((index,key,arr)=>{
    // console.log(index,key,arr);
})

let array=[
    {
        langName:"Javascript",
        langshort:"JS"
    },
    {
        langName:"Java",
        langshort:"ja"
    },
    {
        langName:"Python",
        langshort:"py"
    },
    {
        langName:"Ruby",
        langshort:"ry"
    }
]

array.forEach(element => {
    // console.log(element);
    console.log(element.langName,"-",element.langshort);
});
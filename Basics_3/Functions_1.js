// function sum(n1,n2){
//     console.log(n1+n2);
// }

// sum(5,6) // Passing Arguments

// function sum(n1,n2){
//     return n1+n2;
// }

// let result=sum(5,5)
// console.log(result);


// function div(n1,n2=2){
//     return n1/n2;
// }

// console.log(div(5,3));
// console.log(div(5,2));
// console.log(div(5));

//Functions with objects and arrays

// function productPrice(...num){
//     return num;
// }
// console.log(productPrice(400));
// console.log(productPrice(400,450,500));

// let obj={
//     name:"sujit",
//     no_of_products:3
// }

// function objectHandler(object){
//     console.log(`Name:${object.name} and No of products:${object.no_of_products}`);
// }

// objectHandler(obj)
// objectHandler({
//     name:"ankit",
//     no_of_products:5
// })

let arr=[3,4,5,5,5,6]

function showArray(array){
    return array;
}

console.log(showArray(arr));
console.log(showArray(["s","u","j","i","t"]));
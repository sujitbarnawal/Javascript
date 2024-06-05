

let height=document.querySelector("#height")
let weight=document.querySelector("#weight")
let result=document.querySelector("#result")
let button = document.querySelector("button")

button.addEventListener("click",()=>{
    let heightValue=parseFloat(height.value)
    let weigthValue=parseFloat(weight.value)
    let heightInMeters=heightValue/100
    let bmi=weigthValue/(heightInMeters**2)
    result.innerHTML=bmi.toFixed(2)+"kg/m<sup>2</sup>"
    result.classList.remove("final")
})




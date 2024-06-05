let buttons=document.querySelectorAll(".button")

// buttons[0].addEventListener("click",()=>{
//     document.body.style.backgroundColor="grey"
//     document.body.style.color="white"
// })

// buttons[1].addEventListener("click",()=>{
//     document.body.style.backgroundColor="white"
//     document.body.style.color="black"
// })

// buttons[2].addEventListener("click",()=>{
//     document.body.style.backgroundColor="blue"
//     document.body.style.color="white"
// })

// buttons[3].addEventListener("click",()=>{
//     document.body.style.backgroundColor="rgb(172, 172, 2)"
//     document.body.style.color="white"
// })

// use of for each 
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.id=="grey"){
            document.body.style.backgroundColor=button.id
            document.body.style.color="white"
        }
        if(button.id=="white"){
            document.body.style.backgroundColor=button.id
            document.body.style.color="black"
        }
        if(button.id=="blue"){
            document.body.style.backgroundColor=button.id
            document.body.style.color="white"
        }
        if(button.id=="yellow"){
            document.body.style.backgroundColor="rgb(172, 172, 2)"
            document.body.style.color="white"
        }
    })
})

let start = document.querySelector("#start")
let stop = document.querySelector("#stop")

function randNum(){
    return Math.floor(Math.random()*255);
}

function randColor(){
    let a=randNum()
    let b=randNum()
    let c=randNum()
    let color=`rgb(${a},${b},${c})`
    return color;
}

start.addEventListener("click",()=>{
    setIn=setInterval(()=>{
            let bg_color=randColor()
            document.body.style.backgroundColor=bg_color
    },1000)
})

stop.addEventListener("click",()=>{
    clearInterval(setIn)
})
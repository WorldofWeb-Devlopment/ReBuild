const input = document.getElementById("input-box")
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
let count = 0 ;

increase.addEventListener("click",()=>{ 
    count = (count + 1 )
    input.value = count
    console.log(count)
})

decrease.addEventListener("click",()=>{

    count = count>0 ? count-1 : 0
    
    input.value = count


})
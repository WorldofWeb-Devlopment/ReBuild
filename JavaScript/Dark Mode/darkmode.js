const input = document.getElementById("input-box")
const all = document.getElementById("all")

input.addEventListener("change",()=>{
    console.log(input.checked)
    if(input.checked){
       all.style.backgroundColor = "black"
    }
    else{
        all.style.backgroundColor = "white"
    }
})
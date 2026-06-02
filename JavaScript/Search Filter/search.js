const inputbox = document.getElementById("input-box")

let query = "" ;

const container = document.querySelector("div")

const elements = container.querySelectorAll("h1")

inputbox.addEventListener("keyup",(event)=>{

    query = event.target.value.toUpperCase() 
    
    for (let i = 0; i < elements.length; i++) {
       
        if(elements[i].textContent.toUpperCase().indexOf(query)<0){
            elements[i].style.display = "none"
        }
        else{
            elements[i].style.display = "block"
        }
        
    }


})
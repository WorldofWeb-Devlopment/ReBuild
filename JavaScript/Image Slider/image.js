document.addEventListener("DOMContentLoaded",()=>{
    
    const previous = document.querySelector(".prev")
    const next = document.querySelector(".next")
    const slide = document.querySelectorAll(".slide")
    const slider = document.querySelector(".slider")
    
    let currentSlide = 0 ;
    
    const sliderCount = slide.length;
    
    
    function goToSlide(index){
        currentSlide = index;
        slider.style.transform =`translateX(-${currentSlide * 33.333}%)`
    }
    
    function previousSlide(){
        currentSlide = (currentSlide-1 + sliderCount) % sliderCount ;
        goToSlide(currentSlide)
    }
    function nextSlide(){
        currentSlide = (currentSlide + 1) % sliderCount
         goToSlide(currentSlide)
    }

    previous.addEventListener("click",previousSlide)
    next.addEventListener("click",nextSlide)

  setInterval(nextSlide,2000)
})




const track = document.querySelector('.carousel_track');

const slides = Array.from(track.children);

let index=0;

// console.log(slides);

const nextButton = document.getElementById("nextBtn");

const prevButton = document.getElementById("prevBtn");

const slideWidth=slides[0].getBoundingClientRect().width;
// console.log(slides[0].getBoundingClientRect());
// console.log(slideWidth); 

buttonDisabler();


//arrange the slides next to each other
const setSlidePosition = (slide,index)=>{
  
    slide.style.left=slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);



const moveToSlide=(track,currentSlide,targetSlide)=>{
    track.style.transform='translateX(-'+ targetSlide.style.left+ ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  
}





//when I click left , move the slide to left

prevButton.addEventListener("click",e=>{
    const currentSlide=track.querySelector(".current-slide");
    const prevSlide= currentSlide.previousElementSibling;
    moveToSlide(track,currentSlide,prevSlide);
    index-=1;
    buttonDisabler();
});








//when I click right , move the slide to right
nextButton.addEventListener("click",e=>{
      const currentSlide=track.querySelector(".current-slide");
      const nextSlide= currentSlide.nextElementSibling;
      moveToSlide(track,currentSlide,nextSlide);
     
      index+=1;
      buttonDisabler();

   
});



//disabling the 
function buttonDisabler()
{
     if(index===0 && slides.length>0)
     {
         prevButton.style.display="none"
     }
     else 
     {
        prevButton.style.display="block";
     }

     if(index===slides.length-1 && slides.length>0)
     {
        nextButton.style.display="none"
     }
     else
     {
        nextButton.style.display="block";
     }
}


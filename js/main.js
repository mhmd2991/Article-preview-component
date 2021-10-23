let share = document.querySelector(".share");
let socialMedia = document.querySelector(".social-media");

if(window.matchMedia('screen and (min-width: 1000px)').matches){
    function myFunction() {
        socialMedia.classList.toggle("active");
    }
            
}else{
    console.log("phone");
}
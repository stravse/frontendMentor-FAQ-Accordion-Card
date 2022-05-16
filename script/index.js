
const questions = document.querySelectorAll(".question-container");
const box = document.querySelector(".box-image");

questions.forEach(question => {
    question.addEventListener("click", function(){
        
        // close all other open tab if there is any
        if(!question.classList.contains("active")){
            questions.forEach(function(question){
                question.classList.remove("active");
            })
        }
        
        // open or close clicked tab 
        this.classList.toggle("active");
    })
});

const questions = document.querySelectorAll(".question-container");
const box = document.querySelector(".box-image");

questions.forEach(question => {
    question.addEventListener("click", function(){
        // close all other open tab if clicking on a non active tab
        if(!this.classList.contains("active")){
            questions.forEach( quest => {
                quest.classList.contains("active");{
                    quest.classList.remove("active");
                    box.classList.remove("move-box");
                }
            })
        }
        // open or close clicked tab 
        this.classList.toggle("active");
        box.classList.toggle("move-box");
    })
});
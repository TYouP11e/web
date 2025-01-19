const heart = document.querySelector(".heart");
const likesNum = document.querySelector(".likes-number");

heart.addEventListener("click", function(){
    heart.classList.toggle("added");
    if (heart.classList.contains("added")){
        likesNum.textContent++;
    }   
    else {
        likesNum.textContent--;
    }
})
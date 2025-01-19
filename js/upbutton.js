const upButton = document.querySelector(".upbutton");

window.addEventListener("scroll", upbtn);


function upbtn() {
    if (window.pageYOffset > 200){
        upButton.classList.add("shown");
    }
    else {
        upButton.classList.remove("shown");
    }
}



upButton.addEventListener("click", function (){
    scrollTo(0, 0);
});
const themechanger = document.querySelector(".theme_changer");
const container = document.querySelector("body");

themechanger.addEventListener("click", theme )







function theme(){
    container.classList.toggle("dark_theme");
}
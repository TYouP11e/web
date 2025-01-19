const cookieAgreement = document.querySelector(".cookies-agreement");
const cookiesButton = document.querySelector(".button");

let overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);


cookiesButton.addEventListener("click", function(){
    cookieAgreement.classList.add("cookies-agreement-closed");
    overlay.remove();
})

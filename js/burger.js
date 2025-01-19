const iconMenu = document.querySelector(`.menu`);
const list = document.querySelector(`.list`);
const nav = document.querySelector(`nav`);
const header = document.querySelector(`header`);
const btn = document.querySelector(`.btn`);

header.style.alignItems="enter";
function addMenu() 
{
    if (list.classList.contains("active")){
        list.classList.remove("active");
        iconMenu.src="img/burgeropen.jpg";
        nav.style.height="auto";


    }
    else{
        list.classList.add("active");
        iconMenu.src="img/burgerclosed.jpg";
        nav.style.height="30vh";
        header.style.alignItems="flex-start";
    }
}




btn.addEventListener(`click`, addMenu)



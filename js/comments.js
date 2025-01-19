const form = document.querySelector("form");
const commentList = document.querySelector(".comment_list");
const button = document.querySelector("submit");



function createComment (evt) {
    evt.preventDefault()
    console.log(evt);
    let textareaValue = evt.target.elements.suggestions.value;
    console.log(textareaValue);
     let createItem = document.createElement("li");
     createItem.textContent = textareaValue;
     commentList.append(createItem);
    //  evt.target.elements.suggestions.value = "";
    form.reset();
}

form.addEventListener("submit", createComment);


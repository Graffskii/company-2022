form = document.forms[0];

let removeButton = form.removeButton;
let buttonSelect = form.buttons;

function removeOption(){
    let selectedIndex = buttonSelect.options.selectedIndex;
    buttonSelect.options[selectedIndex] = null;
}

removeButton.addEventListener("click", removeOption);
const delBtn = document.querySelector("#remove-btn");
const nameInput = document.querySelector(".name-input");
const amtInput = document.querySelector(".desc-input");

delBtn.addEventListener("click", ()=>{
    amtInput.classList.add("hidden");
    nameInput.classList.add("hidden");
    if(amtInput.classList.length == 3 && nameInput.classList.length == 3){

    } else {
        amtInput.classList.remove("hidden");
        nameInput.classList.remove("hidden");
    }

})
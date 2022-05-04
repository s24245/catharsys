let strangerPopupBtn = document.querySelector(".main__inner-website")
let friendPopupBtn = document.querySelector(".main__inner-friend")

let strangerPopup = document.querySelector(".strangerPopup") 
let strangerPopupClose = document.querySelector(".strangerPopup__inner-close img")

let friendPopup = document.querySelector(".friendPopup")
let friendPopupClose = document.querySelector(".friendPopup__inner-close img")


strangerPopupBtn.addEventListener("click", ()=> {
    strangerPopup.style.display = "block";
})

strangerPopupClose.addEventListener("click", ()=> {
    strangerPopup.style.display = "none";
})

friendPopupBtn.addEventListener("click", ()=> {
    friendPopup.style.display = "block";
})

friendPopupClose.addEventListener("click", ()=> {
    friendPopup.style.display = "none";
})
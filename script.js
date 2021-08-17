const baloncuk = document.querySelector(".baloncuk")
const shareBox = document.querySelector(".share-box")
const acika = document.querySelector(".acik")
const kapali = document.querySelector(".kapali")

shareBox.addEventListener("click",()=>{
    setTimeout(baloncuk.classList.toggle("acik"),2500)

})



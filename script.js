const icon = document.querySelector(".mi-plus")
const pBody = document.querySelector(".para-body")
const pHeading = document.querySelector("paragraph-heading")
let svgcon = icon.querySelector("svg")

icon.addEventListener("click",function(){
    if(pHeading.classList.contains("mi-plus")){
        svgcon.setAttribute("d", "M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z");
        icon.style.fill = "#AD28EB"  
    }
})


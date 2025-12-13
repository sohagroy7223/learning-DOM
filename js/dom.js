const sections =document.querySelectorAll("section")
for(const section of sections){
    section.style.border ="2px solid blue"
    section.style.paddingLeft = "10px   "
    section.style.marginBottom = "5px"
    section.style.borderRadius= "20px"
    section.style.background = "lightgray"
}
const places = document.getElementsByClassName("place-container")
for(const place of places){
    place.style.textAlign = "center"
    place.style.fontSize = "1.5rem"
}


const nav = document.getElementById("nav-container");
nav.classList.add("home-page")
nav.classList.remove("home-page")
nav.firstChild
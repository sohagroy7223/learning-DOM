const li = document.getElementsByTagName("li")
console.log(li)
const allTitle = document.getElementsByClassName("section-title")
console.log(allTitle)
const sectionTitle = document.getElementById("second-section")
sectionTitle.style.color = "blue"
sectionTitle.style.background="lightgray"
sectionTitle.style.border="2px solid"
sectionTitle.style.margin="10px"
sectionTitle.style.borderRadius="20px"
sectionTitle.style.padding = "20px"
sectionTitle.style.textAlign="center"
sectionTitle.style.border= "none"

const secondList = document.getElementById("second-list")
const li1 = document.createElement("li")
li1.innerText="add a dynamic li"
secondList.appendChild(li1)
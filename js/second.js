
// addad by innerText**************

const mainContainer = document.getElementById("main-container")

const section = document.createElement("section")
const h1 = document.createElement("h1")
h1.innerText="my dynamic h1"
section.appendChild(h1)
mainContainer.appendChild(section)

const ul = document.createElement("ul")
section.appendChild(ul)
const li2= document.createElement("li")
li2.innerText="Bangladesh"
ul.appendChild(li2)

const li3= document.createElement("li")
li3.innerText="India"
ul.appendChild(li3)

const li4= document.createElement("li")
li4.innerText="USA"
ul.appendChild(li4)

const li5= document.createElement("li")
li5.innerText="UK"
ul.appendChild(li5)
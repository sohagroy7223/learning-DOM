//1. where to add 
const placeList = document.getElementById("place-list")
//2. what to be add
const li = document.createElement("li")
li.innerText="salbon"

//3. add the child
placeList.appendChild(li)

// new section add by js**********

//1. where to add
const mainContainer = document.getElementById("main-container")
console.log(mainContainer)

//2.what to be add
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText="My food item";
section.appendChild(h1);


const ul = document.createElement("ul")
section.appendChild(ul)
const li1 = document.createElement("li")
li1.innerText = "polaow"
ul.appendChild(li1)

const li2 = document.createElement("li")
li2.innerText = "biryani"
ul.appendChild(li2)

const li3 = document.createElement("li")
li3.innerText = "borhanay"
ul.appendChild(li3)

const li4 = document.createElement("li")
li4.innerText = "doi"
ul.appendChild(li4)

mainContainer.appendChild(section);
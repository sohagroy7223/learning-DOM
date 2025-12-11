console.log(document);
console.log("hello from js");
const liCollection = document.getElementsByTagName("li");
for (const li of liCollection) {
    console.log(li.innerText);
}
const allHeading = document.getElementsByTagName("h1");
for (const h1 of allHeading) {
    console.log(h1);
}

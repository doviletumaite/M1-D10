//  JS EXERCISES

// 21
let x = "John";
let y = "Doe";
console.log(x +" <> " + y);

// 22
const firstobject = {
    name: "Mario",
    surname: "Rossi",
    email: "mariorossi@email.com",
};

// 23 

delete firstobject.email;
console.log(firstobject);

// 24
let tenStrings = [];
for (let i = 0; i < 10; i++) {
    tenStrings.push("New Value" + i)
}

console.log(tenStrings)

// 25 

// 26
 let random = []
 for (let i= 0; i < 100; i++) {
     random.push(Math.floor(Math.random()*100))
 }
 console.log(random)

 // 27
 function minMax(){

 }


 // 28 

 let arrayOfArrays = []
 for (let i = 0; i < 10; i++) {
     let firstArray = [];
     for (let b = 0; b < 10; b++) {
         firstArray.push(Math.floor(Math.random()*10))
     }
     arrayOfArrays.push(firstArray)
 }
 console.log(arrayOfArrays)


 // 29
 let arrayA = [];
 for (let i = 0; i<89; i++){
     arrayA.push(Math.floor(Math.random()*12))
 }
let sizeA = arrayA.length
console.log(sizeA)
 
 let arrayB = [];
for (let i = 0; i<39; i++){
    arrayB.push(Math.floor(Math.random()*82))
}
let sizeB = arrayB.length
console.log(sizeB)

 function  whoIsTheLongher (arrayA, arrayB){
if (arrayA > arrayB) {
    return arrayA
 } else {
     return arrayB
 }
}

// 30

// 31
const cointainer = document.getElementById("container"); 

// 32
const everyTd = document.querySelectorAll("td")

// 33 
const channgeAllTds = function () {
    const newTextForTd = document.querySelectorAll("td");
tdText.forEach((td) => {
    td.innerText = "some text";
})
}
channgeAllTds()

// 34
const changeHeading = function (content) {
    const heading = document.querySelector("h1")
    h1.innerText = content
}
changeHeading()

//35
const newRow = function () {
const table = document.querySelector("table")
const tr = document.querySelector("tr")
table.appendChild(tr +1)
}
newRow()
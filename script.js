var AREA = 300
var COLORS = ["red", "orange", "yellow","green", "blue", "purple", "violet"]
function randomColor(){
    var index = Math.floor(Math.random() * COLORS.length)
    return COLORS[index]
}
function createBox(n = 16){
    let box = document.createElement("div")
    box.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "blue"
    })
    //constrain box size to area
    var size = AREA / n
    box.className = "box"
    box.style.width = `${size}px`
    box.style.height = `${size}px`
    box.style.border = "1px solid"
    box.style.boxSizing = "border-box"
    return box;
}
function createRow(){
    let newRow = document.createElement("div")
    newRow.className = "row"
    newRow.style.display = "flex"
    return newRow
}
function initalizeSketchArea(){
    let area = document.createElement("div")
    area.className = "area"
    area.style.width = "960px"
    area.style.height = "960px"
    document.body.append(area)
    return area
}
function createAllBoxes(size = 16){
    var area = document.querySelector(".area")
    for(let i = 0; i < size; i ++){
        //Create a new row
        var row = createRow()
        //Append boxes to row
        for(let i = 0; i < size; i++){
            var newBox = createBox(size)
            row.append(newBox)
        }
        area.append(row)
        }
}

window.addEventListener("load", () => {
    initalizeSketchArea()
    createAllBoxes()
}
)

var size = document.querySelector(".size-setter")
var clear = document.querySelector(".clear")
var rainbow = document.querySelector(".rainbow")
size.addEventListener("click", () => {
   let size = prompt("Please enter a size between 1 and 100")
   var area = document.querySelector(".area")
   area.replaceChildren()
   createAllBoxes(Number(size)) 
})
clear.addEventListener("click", () => {
    var boxes = document.querySelectorAll(".box")
    boxes.forEach((box) => {
        box.style.backgroundColor = "white"
    })
})
rainbow.addEventListener("click", () => {
    var boxes = document.querySelectorAll(".box")
    boxes.forEach((box) => {
        box.removeEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "blue"
    })
        box.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = randomColor()
    })
    })
})
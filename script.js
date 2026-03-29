function createBox(){
    let box = document.createElement("div")
    box.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "blue"
    })
    box.className = "box"
    box.style.width = "30px"
    box.style.height = "30px"
    box.style.border = "1px solid"
    return box;
}
function createRow(){
    let newRow = document.createElement("div")
    newRow.className = "row"
    newRow.style.display = "flex"
    return newRow
}
function createSketchArea(){
    let area = document.createElement("div")
    area.className = "area"
    return area
}

window.addEventListener("load", () => {
    area = createSketchArea()
    for(let i = 0; i < 16; i ++){
        //Create a new row
        var row = createRow()
        //Append boxes to row
        for(let i = 0; i < 16; i++){
            var newBox = createBox()
            row.append(newBox)
        }
        area.append(row)
        }
    document.body.append(area)
}
)


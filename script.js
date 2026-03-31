var AREA = 300;
var COLORS = ["red", "orange", "yellow", "green", "blue", "purple", "violet"];

function createBox(n = 16) {
  let box = document.createElement("div");
  // box.addEventListener("mousedown", paint)

  //constrain box size to area
  var size = AREA / n;
  box.className = "box";
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.border = "1px solid";
  box.style.boxSizing = "border-box";
  return box;
}
function createRow() {
  let newRow = document.createElement("div");
  newRow.className = "row";
  newRow.style.display = "flex";
  return newRow;
}
function initalizeSketchArea() {
  let area = document.createElement("div");
  let container = document.querySelector(".container")
  area.className = "area";

  container.append(area);
  return area;
}
var mousedown = false
function paint(event, color = "blue") {
    var area = document.querySelector(".area");
    area.onmousedown = () => (mousedown = true);
    area.onmouseup = () => (mousedown = false);
    if (event.type === "mouseover" && !mousedown) return;
    else {
      event.target.style.backgroundColor = color;
    }
}
function createAllBoxes(size = 16) {
  var area = document.querySelector(".area");
  for (let i = 0; i < size; i++) {
    //Create a new row
    var row = createRow();
    //Append boxes to row
    for (let i = 0; i < size; i++) {
      var newBox = createBox(size);
      row.append(newBox);
    }
    area.append(row);
  }
var boxes = document.querySelectorAll(".box")
  boxes.forEach((box) => {
    box.addEventListener("mousedown", paint)
    box.addEventListener("mouseover", paint)
  })
}


window.addEventListener("load", () => {
  initalizeSketchArea();
  createAllBoxes();
  
});

function randomColor() {
  var index = Math.floor(Math.random() * COLORS.length);
  return COLORS[index];
}

var size = document.querySelector(".size-setter");
var clear = document.querySelector(".clear");
var rainbow = document.querySelector(".rainbow");
size.addEventListener("click", () => {
  let size = prompt("Please enter a size between 1 and 100");
  var area = document.querySelector(".area");
  area.replaceChildren();
  createAllBoxes(Number(size));
});
clear.addEventListener("click", () => {
  var boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
  });
});
rainbow.addEventListener("click", () => {
  var boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.removeEventListener("mousedown", paint)
    box.removeEventListener("mouseover", paint)
    box.addEventListener("mousedown", (event) => paint(event, randomColor()))
    box.addEventListener("mouseover", (event) => paint(event, randomColor()))
  })

});

var size = 10;
var color = "black";
var ink = color;
const canvas = document.getElementById('canvas');
const colors = document.getElementById('color-buttons');
const pencil = document.getElementById('draw-button');
const eraser = document.getElementById('erase-button');
const delet = document.getElementById('delete-button');
const palette = document.getElementById('palette-button');
const colorPalette = document.getElementById('color-palette')

function createCells(size) {
    canvas.innerHTML = "";
    canvas.style.gridTemplateColumns = "repeat(" + size.toString() + ",1fr)"
    canvas.style.gridTemplateRows = "repeat(" + size.toString() + ",1fr)"

    for (var i = 0; i < size * size; i++) {
        const cell = document.createElement('div')
        cell.className = 'cell'
        canvas.append(cell)
    };
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mousedown', changeColor);
        cell.addEventListener('mouseover', changeColor);
    })
};

let mouseDown = false

canvas.onmousedown = () => (mouseDown = true)
canvas.onmouseup = () => (mouseDown = false)
function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) {
        return
    }else{
        e.target.style.backgroundColor = ink;
    }
    
}

function generateColors(){
    var color = document.querySelector('#color-button')
    color.addEventListener('click', getColor);
    for (var i = 0; i < 7; i++) {
        var colorClone = color.cloneNode(true);
        colorClone.style.backgroundColor = generateColor(i);
        colorClone.id = 'color-button';
        colorClone.addEventListener('click', getColor);
        color.parentNode.insertBefore(colorClone, color.parentNode.children[1]);
    };
}

function generatePaletteColors(){
    
    for (var i = 0; i < 100; i++) {
        var paletteColorBtn = document.createElement("div");
        paletteColorBtn.style.backgroundColor = `hsl(${360*i/100},100%,50%)`;
        paletteColorBtn.id = 'palette-color-button';
        paletteColorBtn.addEventListener('click', pickColor);
        colorPalette.append(paletteColorBtn);
    };
}

pencil.addEventListener('click', paintMode);
eraser.addEventListener('click', eraseMode);
delet.addEventListener('click', del);

function pickColor(e){
    var colorBtn = document.createElement("div");
    colorBtn.style.backgroundColor = e.target.style.backgroundColor;
    colorBtn.id = 'color-button';
    colorBtn.className = 'button';
    colorBtn.addEventListener('click', getColor);
    colors.insertBefore(colorBtn, colors.lastElementChild);
    ink = colorBtn.style.backgroundColor
    e.stopPropagation();
    closePalette();
}
function getColor(e){
    ink = e.target.style.backgroundColor
    color = ink;
}
function generateColor(index){
    return `hsl(${360*index/7},100%,50%)`
}
function del(){
    createCells(size);
}

function paintMode() {
    ink = color;
}
function eraseMode(){
    ink = "white"
}


//experimental
palette.addEventListener('click', openPalette)

function openPalette() {
    console.log("palette button")
    colorPalette.classList.add('active')
  }

  function closePalette() {
    console.log("close")
    colorPalette.classList.remove('active')
  }

generatePaletteColors()
generateColors();
createCells(size);

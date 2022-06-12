var size = 10;
var color = "black";
var ink = color;
const canvas = document.getElementById('canvas');
const colors = document.getElementById('color-buttons');
const pencil = document.getElementById('draw-button');
const eraser = document.getElementById('erase-button');
const delet = document.getElementById('delete-button');


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
    canvas.addEventListener('mousedown',()=>{
        mouseDown = true;
    });
    canvas.addEventListener('mouseup',()=>{
        mouseDown = false;
    });
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            if(mouseDown){
                cell.style.background = ink;
            }
        }
        );
    });
    
}

function generateColors(){
    var color = document.querySelector('#color-button')
    for (var i = 0; i < 7; i++) {
        var colorClone = color.cloneNode(true);
        
        colors.append(colorClone)
    };
}


pencil.addEventListener('click', paintMode);
eraser.addEventListener('click', eraseMode);
delet.addEventListener('click', del);

function del(){
    createCells(size);
}

function paintMode() {
    ink = "black"
}
function eraseMode(){
    ink = "white"
}
generateColors();
createCells(size);
console.log('yes');
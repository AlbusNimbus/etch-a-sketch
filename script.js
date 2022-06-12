var size = 8;
const canvas = document.getElementById('canvas');


function createCells(size){
    canvas.innerHTML = "";
    canvas.style.gridTemplateColumns = "repeat("+ size.toString() +",1fr)"
    canvas.style.gridTemplateRows =  "repeat("+ size.toString() +",1fr)"
    for (var i=0; i < size*size; i++) {
        const cell = document.createElement('div')
        cell.className = 'cell'
        canvas.append(cell)
    };
}




createCells(size);
console.log('yes');
let container           = document.querySelector('#container');
let rows                = document.getElementsByClassName('row');
let cells               = document.getElementsByClassName('cell');
let clearButton         = document.getElementById('clear');
let eraserButton        = document.getElementById('eraser');
let colorModeButton     = document.getElementById('color');
let rainbowModeButton   = document.getElementById('rainbow');
let colorPalette        = document.getElementById('colorPalette');
let rangeNum            = document.getElementById('rangeNum');
let squareNum           = document.getElementById('squareNum');

let defaultGrid = () => {
    makeRows(16);
    makeColumns(16);
}

let createGrid = (row, col) => {
    makeRows(row);
    makeColumns(col)
}

let makeRows = (rowNum) => {
    for(let r = 0; r < rowNum; r++){
        let row = document.createElement("div");
        container.appendChild(row).className = "row";
    }
}

let makeColumns = (cellNum) => {
    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < cellNum; j++){
            let newCell = document.createElement('div')
            rows[i].appendChild(newCell).className = 'cell';
        }
    }
}

let clearGrid = () => {
    container.innerHTML = '';
}

// createGrid(rangeNum.value, rangeNum.value)
createGrid(16, 16)


rangeNum.addEventListener('change', () => {
    squareNum.innerText =  `${rangeNum.value} x ${rangeNum.value}`;
    clearGrid();
    createGrid(rangeNum.value, rangeNum.value)
    console.log(rangeNum.value)
})


colorModeButton.addEventListener('click', () => {
    eraserButton.classList.remove('buttonActive');
    rainbowModeButton.classList.remove('buttonActive');
    colorModeButton.classList.add('buttonActive');
    colorPalette.classList.remove('invisible');
    container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = colorPalette.value;
    }) 
})

clearButton.addEventListener('click', (e) => {
    let cells = Array.from(document.querySelectorAll('.cell'))
    cells.forEach(cell => cell.style.backgroundColor = 'white')
    console.log(rangeNum.value)
})

eraserButton.addEventListener('click', () => {
    eraserButton.classList.add('buttonActive');
    rainbowModeButton.classList.remove('buttonActive');
    colorModeButton.classList.remove('buttonActive');
    colorPalette.classList.add('invisible')
    container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'white';
    })
})

rainbowModeButton.addEventListener('click', () => {
    eraserButton.classList.remove('buttonActive');
    rainbowModeButton.classList.add('buttonActive');
    colorModeButton.classList.remove('buttonActive');
    colorPalette.classList.add('invisible')
    container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256 + 1)}, ${Math.floor(Math.random() * 256 + 1)}, ${Math.floor(Math.random() * 256 + 1)})`;
    })
})

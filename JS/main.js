let gridSize = 16;
let gridPer = 100/gridSize*6.8;
const gridContainer = document.querySelector('#grid');
const clear = document.querySelector('#clear');
const CS = document.querySelector('#CS');
const size = document.querySelector('#size');

function createGrid (gridSize) {
    for (let j = 0; j < gridSize; j++) {
        for (let i = 0; i < gridSize; i++) {
            let d = document.createElement('div');
            d.classList.add('block');
            gridContainer.appendChild(d);
        }
    }
}

createGrid (gridSize);

let blocks = document.querySelectorAll('.block');

for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.width = `${gridPer}px`;
    blocks[i].style.height = `${gridPer}px`;
    blocks[i].style.width = `${gridPer}px`;
    if ((i) % gridSize === 0) {
        blocks[i].style.clear = `both`;
    }
    blocks[i].addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = `darkgrey`;
    })
}

clear.addEventListener('click', () => {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = `rgba(100, 110, 110,1)`
    }
})

CS.addEventListener('click', () => {
    if (gridSize < 1 || gridSize > 101) {
        return
    }
    gridSize = size.value;
    gridPer = 100/gridSize*6.8;
    gridContainer.innerHTML = '';
    createGrid(gridSize);
    blocks = document.querySelectorAll('.block');
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.width = `${gridPer}px`;
        blocks[i].style.height = `${gridPer}px`;
        blocks[i].style.width = `${gridPer}px`;
        if ((i) % gridSize === 0) {
            blocks[i].style.clear = `both`;
        }
        blocks[i].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = `darkgrey`;
        })
    }
})

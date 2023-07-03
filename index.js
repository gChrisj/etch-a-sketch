//Set Defaults Color/Mode/Size
const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

//Define Current Color/Mode/Size and their functions
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor){
    currentColor = newColor;
}
function setCurrentMode(newMode){
    activateButton(newMode);
    currentMode = newMode;
}
function setCurrentSize(newSize){
    currentSize = newSize;
}

//Define all variables from HTML
const grid = document.getElementById('grid');
const colorPicker = document.getElementById('colorPicker')
const colorBtn = document.getElementById('colorBtn')
const rainbowBtn = document.getElementById('rainbowBtn')
const eraseBtn = document.getElementById('eraseBtn')
const clearBtn = document.getElementById('clearBtn')
const size_value = document.getElementById('size_value')
const sizeSlider = document.getElementById('sizeSlider')

//Add event listeners to inputs
colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorBtn.onclick = () =>setCurrentMode('color');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraseBtn.onclick = () =>setCurrentMode('erase');
clearBtn.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

//Default mouseDown = false,  down or up on body
let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

//Grid functions to changeSize, updateSize, reloadGrid, clearGrid, setupGrid

function changeSize(val){
    setCurrentSize(val);
    updateSizeValue(val);
    reloadGrid();
}
function updateSizeValue(val){
    size_value.innerHTML = `${val} x ${val}`;
}

function reloadGrid(){
    clearGrid();
    setupGrid(currentSize);
}
function clearGrid(){
    grid.innerHTML = "";
}
function setupGrid(size){
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size*size; i++){
        const gridElement = document.createElement('div');
        gridElement.id = "grid_item";
        gridElement.addEventListener("mouseover", changeColor);
        gridElement.addEventListener("mousedown", changeColor);
        grid.appendChild(gridElement);
    }
}
//Function for changing colors
function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    if(currentMode === 'rainbow'){
        const randR = Math.floor(Math.random()*256);
        const randG = Math.floor(Math.random()*256);
        const randB = Math.floor(Math.random()*256);
        e.target.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`;
    }else if(currentMode === 'color'){
        e.target.style.backgroundColor = currentColor;
    }else if(currentMode === 'erase'){
        e.target.style.backgroundColor = '#fefefe';
    }
}


//Function for activating the buttons
function activateButton(newMode){
    if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active')
      } else if (currentMode === 'color') {
        colorBtn.classList.remove('active')
      } else if (currentMode === 'erase') {
        eraseBtn.classList.remove('active')
      }
    
      if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active')
      } else if (newMode === 'color') {
        colorBtn.classList.add('active')
      } else if (newMode === 'erase') {
        eraseBtn.classList.add('active')
      }


}


//On window load set defaults
window.onload = () =>{
    setupGrid(DEFAULT_SIZE);
    activateButton(DEFAULT_MODE);}
























// function changeColor(e) {
//   if (e.type === 'mouseover' && !mouseDown) return
//   if (currentMode === 'rainbow') {
//     const randomR = Math.floor(Math.random() * 256)
//     const randomG = Math.floor(Math.random() * 256)
//     const randomB = Math.floor(Math.random() * 256)
//     e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
//   } else if (currentMode === 'color') {
//     e.target.style.backgroundColor = currentColor
//   } else if (currentMode === 'eraser') {
//     e.target.style.backgroundColor = '#fefefe'
//   }
// }

// function activateButton(newMode) {
//   if (currentMode === 'rainbow') {
//     rainbowBtn.classList.remove('active')
//   } else if (currentMode === 'color') {
//     colorBtn.classList.remove('active')
//   } else if (currentMode === 'eraser') {
//     eraserBtn.classList.remove('active')
//   }

//   if (newMode === 'rainbow') {
//     rainbowBtn.classList.add('active')
//   } else if (newMode === 'color') {
//     colorBtn.classList.add('active')
//   } else if (newMode === 'eraser') {
//     eraserBtn.classList.add('active')
//   }
// }

// window.onload = () => {
//   setupGrid(DEFAULT_SIZE)
//   activateButton(DEFAULT_MODE)
// }

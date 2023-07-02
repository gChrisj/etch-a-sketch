// colorPicker
// colorBtn
// rainbowBtn
// eraseBtn
// clearBtn 
// size_value for div above slider
// sizeSlider

let colorPicker = document.querySelector('#colorPicker');
let colorBtn = document.querySelector('#colorBtn');
let rainbowBtn = document.querySelector('#rainbowBtn');
let eraseBtn = document.querySelector('#eraseBtn');
let clearBtn = document.querySelector('#clearBtn');
let size_value = document.querySelector('#size_value');
let sizeSlider = document.querySelector('#sizeSlider');

colorPicker.addEventListener("input", (e)=>{
    console.log(e.target.value);
});

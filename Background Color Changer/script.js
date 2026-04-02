let changeBtn = document.getElementById('colorButton');
let colorPicker = document.getElementById('colorPicker');
let container = document.querySelector('.container');

changeBtn.addEventListener('click', function() {
    let selectedColor = colorPicker.value;
    container.style.backgroundColor = selectedColor;

    // Update the color display
    let colorDisplay = document.getElementById('colorDisplay').querySelector('span');
 
    colorDisplay.textContent = selectedColor;
});

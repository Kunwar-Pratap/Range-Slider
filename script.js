let slider = document.getElementById('myRange');
let sliderValue = document.getElementById('sliderValue');

sliderValue.innerHTML = slider.value;

// Update current slider value
slider.oninput = function () {
    sliderValue.innerHTML = this.value;
}
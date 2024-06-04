let red = document.querySelector('#red')
let green = document.querySelector('#green')
let blue = document.querySelector('#blue')
let rgbToHex = document.querySelector('#rbgToHex')
let answerRGB = document.querySelector('#answerRGB')
let hexToRGB = document.querySelector('#hexToRGB')
let hexInput = document.querySelector('#hexInput')
let answerHex = document.querySelector('#answerHex')

function convertToHex(r, g, b) {
    if ((r < 0 || r > 255) || (g < 0 || g > 255) || (b < 0 || b > 255)) {
        return "Invalid RGB value. Each value must be between 0 and 255."
    }

    redHex = r.toString(16).padStart(2, '0');
    greenHex = g.toString(16).padStart(2, '0');
    blueHex = b.toString(16).padStart(2, '0');

    return `#${redHex}${greenHex}${blueHex}`;
}

function convertToRGB(hex) {
    hex = hex.substring(1);

    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }

    const r = parseInt(hex.substring(0, 2), 16); 
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `RBG(${r}, ${g}, ${b}) ` 
}
hexToRGB.addEventListener('click',()=>{
    answerHex.textContent = convertToRGB(hexInput.value)
}) 
rgbToHex.addEventListener('click',()=>{
    answerRGB.textContent = (convertToHex(parseInt(red.value), parseInt(green.value), parseInt(blue.value))).toUpperCase()
})
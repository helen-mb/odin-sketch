// Accessing the existing grid container
const grid = document.getElementById('grid');
// Using a for loop, create multiple pixels
let size = 2;
const pixelWidth = ((grid.clientWidth / size) - 2);
for (i=1; i<=Math.pow(size, 2); i++) {
    // Creating a single pixel within the grid container
    const pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    pixel.setAttribute('id', `pixel${i}`);
    pixel.style.width = `${pixelWidth}px`;
    console.log(pixelWidth);
    grid.appendChild(pixel);
}
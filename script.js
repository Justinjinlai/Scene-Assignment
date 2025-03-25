const canvas = document.getElementById('sceneCanvas');
const ctx = canvas.getContext('2d');

const background = new Image();
const foreground1 = new Image();
const foreground2 = new Image();

background.src = 'images/red.jpg';
foreground1.src = 'images/Porsche.jpg';
foreground2.src = 'images/images.jpg';

let imagesLoaded = 0;

// Function to check when all images have loaded
function checkImagesLoaded() {
    imagesLoaded++;
    if (imagesLoaded === 3) {
        drawScene();
    }
}

// Assigning onload handlers
background.onload = checkImagesLoaded;
foreground1.onload = checkImagesLoaded;
foreground2.onload = checkImagesLoaded;

function drawScene() {
    // Draw Background
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Draw Foreground Images
    ctx.drawImage(foreground1, 250, 120, 700, 400); // Slightly adjusted position & size
    ctx.drawImage(foreground2, 30, 60, 220, 220);   // Adjusted position & size

    // Draw Text
    drawText();
}

function drawText() {
    ctx.font = '28px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'left';

    // Add text shadow for better visibility
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    ctx.fillText('Justin Jin Lai', 30, 460);
    ctx.fillText('City Scene', 30, 495);
}

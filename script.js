const canvas = document.getElementById('sceneCanvas');
const ctx = canvas.getContext('2d');

const backgroundImage = new Image();
const foregroundImage1 = new Image();
const foregroundImage2 = new Image();

backgroundImage.src = 'City.jpg';
foregroundImage1.src = 'M5.jpg';
foregroundImage2.src = 'M8.jpg';

let imagesLoaded = 0;

function checkAllLoaded() {
    imagesLoaded++;
    if (imagesLoaded === 3) {
        drawScene();
    }
}

backgroundImage.onload = checkAllLoaded;
foregroundImage1.onload = checkAllLoaded;
foregroundImage2.onload = checkAllLoaded;

function drawScene() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    ctx.drawImage(foregroundImage1, 50, 250, 300, 200);
    ctx.drawImage(foregroundImage2, 350, 250, 400, 200);

    drawText();
}

function drawText() {
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 4;
    ctx.fillText('Justin Jin Lai', 20, 40);
    ctx.fillText('City Scene', 20, 80);
}

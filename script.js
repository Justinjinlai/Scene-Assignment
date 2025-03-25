const canvas = document.getElementById('sceneCanvas');
const ctx = canvas.getContext('2d');

const backgroundImage = new Image();
backgroundImage.src = 'images/City.jpg';  
backgroundImage.onload = function() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    drawForegroundImages();
};

function drawForegroundImages() {
    const foregroundImage1 = new Image();
    foregroundImage1.src = 'images/M8.jpg';  
    foregroundImage1.onload = function() {
        ctx.drawImage(foregroundImage1, 100, 350, 150, 150);
    };

    const foregroundImage2 = new Image();
    foregroundImage2.src = 'images/M5.jpg';  
    foregroundImage2.onload = function() {
        ctx.drawImage(foregroundImage2, 500, 350, 200, 200);
    };

    drawText();  
}

function drawText() {
    ctx.font = '35px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    ctx.shadowColor = 'black';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    ctx.fillText('Justin Jin Lai', canvas.width / 2, 20);
    ctx.fillText('City Scene', canvas.width / 2, 70);
}

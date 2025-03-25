const canvas = document.getElementById('sceneCanvas');
const ctx = canvas.getContext('2d');

const backgroundImage = new Image();
backgroundImage.src = 'City.jpg';
backgroundImage.onload = function() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};

const foregroundImage1 = new Image();
foregroundImage1.src = 'M8.jpg';
foregroundImage1.onload = function() {
    ctx.drawImage(foregroundImage1, 100, 100, 150, 150);
};

const foregroundImage2 = new Image();
foregroundImage2.src = 'M5.jpg';
foregroundImage2.onload = function() {
    ctx.drawImage(foregroundImage2, 400, 250, 200, 200);
};

ctx.font = '30px Arial';
ctx.fillStyle = 'white';
ctx.fillText('Justin Jin Lai', 20, 40);
ctx.fillText('City Scene', 20, 80);

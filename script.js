const canvas = document.getElementById('sceneCanvas');
const ctx = canvas.getContext('2d');

const backgroundImage = new Image();
backgroundImage.src = 'City.jpg';

const foregroundImage1 = new Image();
foregroundImage1.src = 'M8.jpg';

const foregroundImage2 = new Image();
foregroundImage2.src = 'M5.jpg';

backgroundImage.onload = function() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    foregroundImage1.onload = function() {
        ctx.drawImage(foregroundImage1, 100, 100, 150, 150);

        foregroundImage2.onload = function() {
            ctx.drawImage(foregroundImage2, 400, 250, 200, 200);

            // Draw text after all images are loaded
            ctx.font = '30px Arial';
            ctx.fillStyle = 'white';
            ctx.fillText('Justin Jin Lai', 20, 40);
            ctx.fillText('City Scene', 20, 80);
        };
    };
};

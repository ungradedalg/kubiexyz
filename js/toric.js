const size = 5;
const radius = 10;
const screenPercent = 0.8;

canvas = document.getElementById('canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

centerX = canvas.width / 2;
centerY = canvas.height / 2;
spacingX = screenPercent * canvas.width / (2 * size);
spacingY = screenPercent * canvas.height / (2 * size);
spacing = Math.min(spacingX, spacingY);

ctx = canvas.getContext('2d');
ctx.fillStyle = '#ddd';
ctx.lineWidth = radius/2;

ctx.beginPath();
ctx.rect(centerX - size * spacing - 5 * radius,
         centerY - radius/2,
         2 * size * spacing + 10 * radius,
         radius);
ctx.fill();

ctx.beginPath();
ctx.rect(centerX - radius/2,
         centerY - size * spacing - 5 * radius,
         radius,
         2 * size * spacing + 10 * radius);
ctx.fill();

for (i = -size; i <= size; i++) {
    for (j = -size; j <= size; j++) {
        pointX = centerX + i * spacing;
        pointY = centerY + j * spacing;
        ctx.beginPath();
        ctx.arc(pointX, pointY, radius, 0, 2 * Math.PI); 
        ctx.fillStyle = '#888';
        ctx.fill();
    }
}



// Function used and remade from own older project: https://github.com/DiegoR03/Portfolio-Website/blob/main/js/backgroundIcon.js
// Hulp van Gemini: https://gemini.google.com/share/fc9e9c0da979
function createGlobalStarField() {
    const oldCanvas = document.getElementById('global-star-canvas');
    if (oldCanvas) oldCanvas.remove();

    const canvas = document.createElement('canvas');
    canvas.id = 'global-star-canvas';
    const context = canvas.getContext('2d');

    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: -1;
    `;

    document.body.prepend(canvas);

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawStaticStars();
    };

    function drawStaticStars() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 600; i++) { 
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const type = Math.random();
            
            const star = {
                x, y,
                size: type < 0.1 ? Math.random() * 1 + 2 : type < 0.3 ? Math.random() * 2 + 1 : Math.random() * 1.5 + 0.5,
                brightness: type < 0.8 ? Math.random() * 0.3 + 0.7 : type < 0.3 ? Math.random() * 0.4 + 0.4 : Math.random() * 0.3 + 0.1,
            };

            context.save();
            context.globalAlpha = star.brightness;
            context.fillStyle = star.brightness > 0.6 ? `rgba(249,255,204,${star.brightness})` : `rgba(200,220,255,${star.brightness})`;
            context.beginPath();
            context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            context.fill();
            context.restore();
        }
    }

    window.addEventListener('resize', resize);
    resize();
}

document.addEventListener('DOMContentLoaded', createGlobalStarField);
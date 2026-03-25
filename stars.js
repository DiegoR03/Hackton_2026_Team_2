// Function used and remade from own older project: https://github.com/DiegoR03/Portfolio-Website/blob/main/js/backgroundIcon.js
function createStarField(container) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    let stars = [];

    canvas.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:0;';
    container.appendChild(canvas);

    const resize = () => {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        drawStaticStars();
    };

    function drawStaticStars() {
        stars = [];
        context.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < 300; i++) {
            const clusterX = Math.random() * canvas.width;
            const clusterY = Math.random() * canvas.height;
            const spread = Math.random() * 200 + 50;
            const x = Math.max(0, Math.min(canvas.width, clusterX + (Math.random() - 0.5) * spread));
            const y = Math.max(0, Math.min(canvas.height, clusterY + (Math.random() - 0.5) * spread));

            const type = Math.random();
            const star = {
                x, y,
                size: type < 0.1 ? Math.random() * 1 + 2 : type < 0.3 ? Math.random() * 2 + 1 : Math.random() * 1.5 + 0.5,
                brightness: type < 0.1 ? Math.random() * 0.3 + 0.7 : type < 0.3 ? Math.random() * 0.4 + 0.4 : Math.random() * 0.3 + 0.1,
            };
            
            context.save();
            context.globalAlpha = star.brightness;
            context.shadowColor = 'rgba(255,255,255,0.9)';
            context.shadowBlur = star.size * star.brightness * 3;

            context.fillStyle = star.brightness > 0.6 ? `rgba(249,255,204,${star.brightness})` : `rgba(200,220,255,${star.brightness})`;
            context.beginPath();
            context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            context.fill();

            if (star.brightness > 0.7) {
                context.shadowBlur *= 2;
                context.globalAlpha *= 0.3;
                context.beginPath();
                context.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
                context.fill();
            }
            context.restore();
        }
    }

    resize();

    return { destroy: () => {
        container.removeChild(canvas);
    }};
}

const starFields = [];
function initStarFields() {
    starFields.forEach(field => field.destroy());
    starFields.length = 0;
    document.querySelectorAll('.stars').forEach(container => {
        starFields.push(createStarField(container));
    });
}

document.addEventListener('DOMContentLoaded', initStarFields);
window.addEventListener('resize', initStarFields);
// Function used and remade from own older project: https://github.com/DiegoR03/Portfolio-Website/blob/main/js/backgroundIcon.js
function createStarField(container) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    let stars = [];
    let time = 0;

    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    container.appendChild(canvas);

    const resize = () => {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        createStars();
    };

    function createStars() {
        stars = [];
        for (let i = 0; i < 300; i++) {
            const clusterX = Math.random() * canvas.width;
            const clusterY = Math.random() * canvas.height;
            const spread = Math.random() * 200 + 50;
            const x = Math.max(0, Math.min(canvas.width, clusterX + (Math.random() - 0.5) * spread));
            const y = Math.max(0, Math.min(canvas.height, clusterY + (Math.random() - 0.5) * spread));

            const type = Math.random();

            // Hulp van https://www.w3schools.com/js/js_const.asp en van Copilot: hulp gekregen met de Math.random() functies en de verschillende eigenschappen van de sterren
            stars.push({
                x, y, baseX: x, baseY: y,
                size: type < 0.1 ? Math.random() * 1 + 2 : type < 0.3 ? Math.random() * 2 + 1 : Math.random() * 1.5 + 0.5,
                brightness: type < 0.1 ? Math.random() * 0.3 + 0.7 : type < 0.3 ? Math.random() * 0.4 + 0.4 : Math.random() * 0.3 + 0.1,
                twinkleSpeed: type < 0.1 ? Math.random() * 0.01 + 0.005 : type < 0.3 ? Math.random() * 0.015 + 0.01 : Math.random() * 0.02 + 0.015,
                offset: Math.random() * Math.PI * 2,
                parallax: Math.random() * 0.5 + 0.5
            });
        }
    }

    function animate() {
        time++;
        context.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            const parallax = Math.sin(time * 0.001 + star.offset) * star.parallax;
            const x = star.baseX + parallax * 2;
            const y = star.baseY + parallax;

            const twinkle = 0.7 + 0.3 * Math.sin(time * star.twinkleSpeed + star.offset);
            const opacity = star.brightness * twinkle;

            context.save();
            context.globalAlpha = opacity;
            context.shadowColor = 'rgba(255,255,255,0.9)';
            context.shadowBlur = star.size * star.brightness * 3;

            context.fillStyle = star.brightness > 0.6 ? `rgba(249,255,204,${star.brightness})` : `rgba(200,220,255,${star.brightness})`;
            context.beginPath();
            context.arc(x, y, star.size, 0, Math.PI * 2);
            context.fill();

            if (star.brightness > 0.7) {
                context.shadowBlur *= 2;
                context.globalAlpha *= 0.3;
                context.beginPath();
                context.arc(x, y, star.size * 2, 0, Math.PI * 2);
                context.fill();
            }
            context.restore();
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();

    return { destroy: () => {
        cancelAnimationFrame(animate);
        container.removeChild(canvas);
        window.removeEventListener('resize', resize);
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
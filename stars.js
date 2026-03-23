// Function used from own older project: https://github.com/DiegoR03/Portfolio-Website/blob/main/js/backgroundIcon.js
function createStar() {
    const containers = document.querySelectorAll('.stars');

    containers.forEach(container => {
        const star = document.createElement('span');
        star.classList.add('backgroundStar');

        const size = Math.random() * 8 + 8;
        const duration = Math.random() * 4 + 4;

        star.style.fontSize = `${size}px`;
        star.style.left = `${Math.random() * container.clientWidth}px`;
        star.style.top = `${Math.random() * container.clientHeight}px`;
        star.style.animation = `twinkle ${duration}s ease-in-out infinite`;

        star.style.animation = `twinkle ${duration}s ease-in-out forwards`;

        container.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, duration * 1000);
    });
}

setInterval(createStar, 500);
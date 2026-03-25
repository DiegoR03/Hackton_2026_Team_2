// scroll through carousel
const list = document.querySelector('.astronaut-carousel-list');
const left = document.querySelector('.astronaut-button-left');
const right = document.querySelector('.astronaut-button-right');

const astronaut = document.querySelectorAll('.team-astronaut-1, .team-astronaut-2, .team-astronaut-3');

updateButton()
function updateButton() {

    if(list.scrollLeft <= 0) {
        left.style.opacity = "0";
        left.style.pointerEvents = "none";
    }
    else {
        left.style.opacity = "1";
        left.style.pointerEvents = "auto";
    }
    if (list.scrollLeft + list.clientWidth >= list.scrollWidth - 1) {
        right.style.opacity = "0";
        right.style.pointerEvents = "none";
    }
    else {
        right.style.opacity = "1";
        right.style.pointerEvents = "auto";
    }
}

list.addEventListener('scroll', updateButton)

left.addEventListener('click', () => {
    list.scrollBy({
        left: -list.clientWidth, 
        behavior: "smooth",
    });  
});

right.addEventListener('click', () => {
    list.scrollBy({
        left: list.clientWidth, 
        behavior: "smooth"
    });
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    astronaut.forEach(astro => {
        const speed = 1;

        astro.style.setProperty(
            '--astronaut-scroll-offset',
            `${scrollY * speed}px`
        );
    });
});
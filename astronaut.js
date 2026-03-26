// scroll through carousel
const list = document.querySelector('.astronaut-carousel-list');
const left = document.querySelector('.astronaut-button-left');
const right = document.querySelector('.astronaut-button-right');

const earth = document.getElementById('earthLocaties-container')

const astronaut = document.querySelectorAll('.team-astronaut-1, .team-astronaut-2, .team-astronaut-3');

updateButton()

// remove scroll buttons function
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

// scroll left / right buttons
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

// move astronauts
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    astronaut.forEach(astro => {
        const speed = 2;

        astro.style.setProperty(
            '--astronaut-scroll-offset',
            `${scrollY * speed}px`
        );
    });

    const speed = 0.6;
    const move = scrollY * speed;
    earth.style.transform = `translateY(${move}px)`

});
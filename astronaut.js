// scroll through carousel
const list = document.querySelector('.astronaut-carousel-list');
const left = document.querySelector('.astronaut-button-left');
const right = document.querySelector('.astronaut-button-right');

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
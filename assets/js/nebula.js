// Met behulp van https://codepen.io/beejaymorgan/pen/rjPwmL
const Nebula_color_1 = '#181932';
const Nebula_color_2 = '#4d0d7e4d';
const Nebula_color_3 = '#2f81a7c4'; 
const NEBULA_BLOB_COUNT = 30; 

function createNebulaGradient() {
    let gradient_array = [];

    for (let i = 0; i < NEBULA_BLOB_COUNT; i++) {
        const x = Math.round(Math.random() * 100);
        const y = Math.round(Math.random() * 100);
        const color = Math.random() < 0.33 ? Nebula_color_1 : Math.random() < 0.66 ? Nebula_color_2 : Nebula_color_3;
        const gradient = `radial-gradient(circle at ${x}% ${y}%, ${color} 0%, transparent 30%)`;
        
        // Push gebruikt om de gradient toe te voegen aan de array https://www.w3schools.com/js/js_const.asp
        gradient_array.push(gradient);
    }

    return gradient_array.join(',');
}

function applyNebula() {
    const nebulaGradient = createNebulaGradient();
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        if (index === 1) return;
        
        section.style.backgroundImage = nebulaGradient;
        section.style.backgroundAttachment = 'fixed';
        section.style.transition = 'background-image 0.5s ease';
        
    });
}

applyNebula();
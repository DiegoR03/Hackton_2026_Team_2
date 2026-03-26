
fetch("partials/nav.html")
    .then(res => res.text())
    .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;
    });

fetch("partials/footer.html")
    .then(res => res.text())
    .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
    });

    
const buttons = document.querySelectorAll('button');

function setActive(id) {
    document.querySelectorAll('[data-id]').forEach(button => {
        button.classList.toggle('active', button.dataset.id === id);
    });
}

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        const id = button.dataset.id;
        setActive(id);
    });
});




// satellite parts explanation scroll

const satelliteButtons = document.querySelectorAll('.button-container button');

satelliteButtons.forEach(button => {
  function activate() {
    const id = button.dataset.id;

    setActive(id);


    const correspondingButton = document.querySelector(
      `.satellite-parts button[data-id="${id}"]`
    );

    correspondingButton.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  };


  button.addEventListener('mouseenter', activate);

  button.addEventListener('focus', (button) => {
    // focus-visible
    if (button.target.matches(':focus-visible')) {
      activate();
    }
  });
});









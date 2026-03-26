
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

function showTab(tabId, clickedButton) {
    // 1. Verberg alle tekst divs
    const textDivs = document.querySelectorAll('#informatie-text > div');
    textDivs.forEach(div => div.classList.remove('active'));

    // 2. Toon de gekozen tekst div
    document.getElementById(tabId).classList.add('active');

    // 3. Verwijder active class van alle knoppen
    const buttons = document.querySelectorAll('#informatie-section-button button');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 4. Voeg active toe aan de knop waar je op klikte
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}








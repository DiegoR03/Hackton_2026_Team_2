
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

  window.scrollTo({

  })


  button.addEventListener('mouseenter', activate);

  button.addEventListener('focus', (button) => {
    // focus-visible
    if (button.target.matches(':focus-visible')) {
      activate();
    }
  });
});








// const buttons = document.querySelectorAll('button');

// buttons.forEach(btn => {
//   const bg = getComputedStyle(btn).backgroundColor; // "rgb(0, 128, 0)" for green
//   if (bg === "rgb(0, 128, 0)") {
//     console.log("This button is green:", btn.dataset.id);
//   }
// });
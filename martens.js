const productGrids = document.querySelectorAll('.pr');

const descriptionGrids = document.querySelectorAll('.pr-description-grid');

let showDescription = false;

descriptionGrids.forEach(description => {
  if (showDescription) {
    description.classList.add('visible')
  }
})
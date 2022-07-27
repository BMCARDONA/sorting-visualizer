
const container = document.querySelector('#columns');
function makeCell (num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            container.appendChild(cell);
        }
    }
}

price.addEventListener('input', function() {
  output.textContent = price.value;
  // This code is just adding extra cells -- that's not what we want
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  number = price.value 
  makeCell(number);
  makeGrid(number, number);
});
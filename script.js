const createColumnsButton = document.querySelector('.createColumnsButton');
const createColumns = document.querySelector('.createColumns');


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeColumn (num) {
  for (let i = 0; i < num; i++) {
          let column = document.createElement('div');
          column.classList.add('column');
          column.style.background = 'brown';
          // Here's how we style the DOM elements
          column.style.height = '' + getRandomInt(100, 500) + 'px';
          createColumns.appendChild(column);
          const styling = document.querySelector('.text');
  }
}

function makeGrid(numCols) {
  createColumns.style.setProperty('--numCols', numCols); 
}

createColumnsButton.addEventListener('click', () => {
  makeColumn(70);
  makeGrid(70);
})


// price.addEventListener('input', function() {
//   output.textContent = price.value;
//   // This code is just adding extra cells -- that's not what we want
//   while (container.firstChild) {
//     container.removeChild(container.firstChild);
//   }
//   number = price.value 
//   makeCell(number);
//   makeGrid(number, number);
// });

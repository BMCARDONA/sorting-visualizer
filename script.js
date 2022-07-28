const createColumnsButton = document.querySelector('.createColumnsButton');
const createColumns = document.querySelector('.createColumns');

function makeColumn (num) {
  for (let i = 0; i < num; i++) {
          let column = document.createElement('div');
          column.classList.add('column');
          createColumns.appendChild(column);
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

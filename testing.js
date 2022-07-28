
// Create new set of random columns indefinitely

let firstTime = true;

function makeColumn (num) {
  for (let i = 0; i < num; i++) {
          let column = document.createElement('div');
          column.classList.add('column');
          column.style.background = 'brown';
          // Here's how we style the DOM elements
          column.style.height = getRandomInt(columnMinHeight, columnMaxHeight) + 'px';
          createColumns.appendChild(column);
  }
}

function makeGrid(numCols) {
  createColumns.style.setProperty('--numCols', numCols); 
}

createColumnsButton.addEventListener('click', () => {
  if (firstTime) {
    makeColumn(numberOfColumns);
    makeGrid(numberOfColumns);
    firstTime = false;
  }
  else {
    for (let i = 0; i < numberOfColumns; i++) {
      // Helpful link: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
      while (createColumns.firstChild) {
        createColumns.removeChild(createColumns.lastChild);
      }
    }   
    makeColumn(numberOfColumns);
    makeGrid(numberOfColumns);
  }
})
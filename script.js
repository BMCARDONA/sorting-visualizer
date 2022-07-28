const createColumnsButton = document.querySelector('.createColumnsButton');
const createColumns = document.querySelector('.createColumns');
let column = document.querySelectorAll(".column");
bubbleSortButton = document.querySelector(".bubbleSortButton");


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

// need to create bubble sort button
function bubbleSort(num) {
  for (let i = 0; i < num - 1; i++) {
    // Here, we call the 'column' selector
    var nodes = Array.prototype.slice.call(document.querySelector(".createColumns").children);
    if (nodes[i].style.height > nodes[i + 1].style.height) {
      // nodes[i].style.height, nodes[i + 1].style.height = nodes[i + 1].style.height, nodes[i].style.height;
      nodes[i].style.background = 'green';
      console.log(nodes[i].style.height);
      a = "" + nodes[i].style.height
      nodes[i].style.height = "" + nodes[i + 1].style.height
      nodes[i + 1].style.height = a
    }
  }
}

bubbleSortButton.addEventListener('click', () => {
  bubbleSort(70);
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

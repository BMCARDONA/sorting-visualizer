const createColumnsButton = document.querySelector('.createColumnsButton');
const createColumns = document.querySelector('.createColumns');
let column = document.querySelectorAll(".column");
bubbleSortButton = document.querySelector(".bubbleSortButton");
numberOfColumns = 75;
fastSpeed = .01;
mediumSpeed = 50;
slowSpeed = 100;
sortingSpeed = fastSpeed;

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
  }
}

function makeGrid(numCols) {
  createColumns.style.setProperty('--numCols', numCols); 
}

createColumnsButton.addEventListener('click', () => {
  makeColumn(numberOfColumns);
  makeGrid(numberOfColumns);
})

// Helpful link: https://stackoverflow.com/questions/65794498/how-to-repeat-promise-chain

const delay = (time) => new Promise((resolve) => {
  setTimeout(resolve, time)
})

async function bubbleSort(array) {
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < array.length - 1 - counter; i++) {
        await delay(sortingSpeed)
        if (array[i].style.height > array[i + 1].style.height) {
          a = "" + array[i].style.height
          array[i].style.height = "" + array[i + 1].style.height
          array[i + 1].style.height = a
          isSorted = false;
        }
      }
      counter++;
    }
    return array;
}

bubbleSortButton.addEventListener('click', () => {
  var nodes = Array.prototype.slice.call(document.querySelector(".createColumns").children);
  async function repeatChain(times, chain) {
    for (let i = 0; i < times; i++) {
      await chain(nodes);
      console.log(nodes);
    }
  }
  repeatChain(1, bubbleSort)
})

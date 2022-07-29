const createColumnsButton = document.querySelector('.createColumnsButton');
const createColumns = document.querySelector('.createColumns');
let column = document.querySelectorAll(".column");
bubbleSortButton = document.querySelector(".bubbleSortButton");
insertionSortButton = document.querySelector(".insertionSortButton");
selectionSortButton = document.querySelector(".selectionSortButton");
columnColor = 'grey'
sortedColor = 'green'
columnMaxHeight = 500;
columnMinHeight = 100;
columnFixedWidth = 10;
numberOfColumns = 25;
fastSpeed = .01;
mediumSpeed = 50;
slowSpeed = 100;
sortingSpeed = fastSpeed;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let firstTime = true;

function makeColumn (num) {
  for (let i = 0; i < num; i++) {
          let column = document.createElement('div');
          column.classList.add('column');
          column.style.background = columnColor;
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


// BUBBLE SORT

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
    // Change color once sorting is complete
    for (let i = 0; i < array.length; i++) {
      await delay(mediumSpeed)
      // Since animation is temporary, it's call should be 
      // the same as that of sortedColor!
      array[i].style.animation = "doneSorting 1s";
      array[i].style.background = sortedColor;
      // Helpful link;\: https://www.w3schools.com/jsref/prop_style_animation.asp
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

// Insertion sort

async function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    await delay(sortingSpeed)
    while (i > 0 && array[i].style.height < array[i - 1].style.height) {
      a = "" + array[i].style.height
      array[i].style.height = "" + array[i - 1].style.height
      array[i - 1].style.height = a
      isSorted = false;
      i -= 1;
    } 
  }
  return array;
}

insertionSortButton.addEventListener('click', () => {
    var nodes = Array.prototype.slice.call(document.querySelector(".createColumns").children);
    async function repeatChain(times, chain) {
      for (let i = 0; i < times; i++) {
        await chain(nodes);
        console.log(nodes);
      }
    }
    repeatChain(1, insertionSort)
})

// Selection sort
async function selectionSort(array) {
  let startIdx = 0;
  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx;
    for (let i = startIdx + 1; i < array.length; i++) {
      await delay(sortingSpeed)
      if (array[smallestIdx].style.height > array[i].style.height) {
        smallestIdx = i;
      }
    }
    const temp = array[smallestIdx].style.height;
    array[smallestIdx].style.height = array[startIdx].style.height;
    array[startIdx].style.height = temp;
    startIdx++
  }
  return array; 
}


selectionSortButton.addEventListener('click', () => {
var nodes = Array.prototype.slice.call(document.querySelector(".createColumns").children);
async function repeatChain(times, chain) {
  for (let i = 0; i < times; i++) {
    await chain(nodes);
  }
}
repeatChain(1, selectionSort)
})
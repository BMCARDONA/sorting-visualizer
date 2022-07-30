const createColumnsButton = document.querySelector('.createColumnsButton');
const createColumns = document.querySelector('.createColumns');
let column = document.querySelectorAll(".column");
bubbleSortButton = document.querySelector(".bubbleSortButton");
insertionSortButton = document.querySelector(".insertionSortButton");
selectionSortButton = document.querySelector(".selectionSortButton");
quickSortButton = document.querySelector(".quickSortButton");
heapSortButton = document.querySelector(".heapSortButton");
mergeSortButton = document.querySelector(".mergeSortButton");
columnColor = '#b22222';
sortingColor = '#bd8600';
// make sure @ keyframes doneSorting color is the same as sortedColor
sortedColor = '#008a20';
columnMaxHeight = 550;
columnMinHeight = 100;
numberOfColumns = 175;
fastSpeed = 1;
mediumSpeed = 10;
slowSpeed = 40;
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
      column.style.height = '' + getRandomInt(columnMinHeight, columnMaxHeight) + 'px';
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

const delay = (time) => new Promise((resolve) => {
  setTimeout(resolve, time)
})

// sortedColorAnimation
async function sortedColorAnimation(array) {
  for (let i = 0; i < array.length; i++) {
    await delay(1);
    array[i].style.animation = "doneSorting 1s";
    array[i].style.background = sortedColor;
  }
}

// sortingColorFunction
function sortingColorFunction(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].style.background = sortingColor;
  }
}

// BUBBLE SORT

// Helpful link: https://stackoverflow.com/questions/65794498/how-to-repeat-promise-chain

async function bubbleSort(array) {
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < array.length - 1 - counter; i++) {
        console.log(array[i].style.height);
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
    sortedColorAnimation(array);
    return array;
}

bubbleSortButton.addEventListener('click', () => {
  var nodes = Array.prototype.slice.call(document.querySelector(".createColumns").children);
  async function repeatChain(times, chain) {
    for (let i = 0; i < times; i++) {
      sortingColorFunction(nodes);
      await chain(nodes);
      console.log(nodes);
    }
  }
  repeatChain(1, bubbleSort)
})

// Insertion sort

async function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    while (i > 0 && array[i].style.height < array[i - 1].style.height) {
      await delay(sortingSpeed);
      a = "" + array[i].style.height
      array[i].style.height = "" + array[i - 1].style.height
      array[i - 1].style.height = a
      isSorted = false;
      i -= 1;
    } 
  }
  sortedColorAnimation(array);
  return array;
}

insertionSortButton.addEventListener('click', () => {
    var nodes = Array.prototype.slice.call(document.querySelector(".createColumns").children);
    async function repeatChain(times, chain) {
      for (let i = 0; i < times; i++) {
        sortingColorFunction(nodes);
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
      if (array[smallestIdx].style.height > array[i].style.height) {
        await delay(sortingSpeed)
        smallestIdx = i;
      }
    }
    const temp = array[smallestIdx].style.height;
    array[smallestIdx].style.height = array[startIdx].style.height;
    array[startIdx].style.height = temp;
    startIdx++
  }
  sortedColorAnimation(array);
  return array; 
}


selectionSortButton.addEventListener('click', () => {
var nodes = Array.prototype.slice.call(document.querySelector(".createColumns").children);
async function repeatChain(times, chain) {
  for (let i = 0; i < times; i++) {
    sortingColorFunction(nodes);
    await chain(nodes);
  }
}
repeatChain(1, selectionSort)
})


// Quick sort
async function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  const pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  while (rightIdx >= leftIdx) {
    await delay(sortingSpeed)
    if (array[leftIdx].style.height > array[pivotIdx].style.height && array[rightIdx].style.height < array[pivotIdx].style.height) {
      swap(leftIdx, rightIdx, array)
    }
    if (array[leftIdx].style.height <= array[pivotIdx].style.height) {
      leftIdx++;
  } 
    if (array[rightIdx].style.height >= array[pivotIdx].style.height) {
      rightIdx--;
  } 
  }
  swap(pivotIdx, rightIdx, array);
  const leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
  if (leftSubarrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1);
    quickSortHelper(array, rightIdx + 1, endIdx);
  }
  else {
    quickSortHelper(array, rightIdx + 1, endIdx);
    quickSortHelper(array, startIdx, rightIdx - 1);
  }
}

function swap(i, j, array) {
  let temp = array[j].style.height;
  array[j].style.height = array[i].style.height;
  array[i].style.height = temp;
}


async function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}


quickSortButton.addEventListener('click', () => {
  var nodes = Array.prototype.slice.call(document.querySelector(".createColumns").children);
  async function repeatChain(times, chain) {
    for (let i = 0; i < times; i++) {
      sortingColorFunction(nodes);
      await chain(nodes);
    }
    if (sortingSpeed == fastSpeed) {
      await delay (nodes.length * 20);
      sortedColorAnimation(nodes);
    }
    if (sortingSpeed == mediumSpeed) {
      await delay (nodes.length * 55);
      sortedColorAnimation(nodes);
    }
    if (sortingSpeed == slowSpeed) {
      await delay (nodes.length * 110)
      sortedColorAnimation(nodes);
    }
  }
  repeatChain(1, quickSort)
})



  // Heap sort

function buildMaxHeap(array) {
  const firstParentIdx = Math.floor((array.length - 2) / 2);
  for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, array.length - 1, array);
  }
}

function siftDown(currentIdx, endIdx, heap) {
  let childOneIdx = currentIdx * 2 + 1;
  while (childOneIdx <= endIdx) {
    const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
    let idxToSwap;
    if (childTwoIdx !== -1 && heap[childTwoIdx].style.height > heap[childOneIdx].style.height) {
      idxToSwap = childTwoIdx;
    } else {
      idxToSwap = childOneIdx;
    }
    if (heap[idxToSwap].style.height > heap[currentIdx].style.height) {
      swap(currentIdx, idxToSwap, heap);
      currentIdx = idxToSwap;
      childOneIdx = currentIdx * 2 + 1;
    } else {
      return;
    }
  }
}

function swap(i, j, array) {
  const temp = array[j].style.height;
  array[j].style.height = array[i].style.height;
  array[i].style.height = temp;
}

async function heapSort(array) {
  buildMaxHeap(array);
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    await delay(slowSpeed);
    swap(0, endIdx, array);
    siftDown(0, endIdx - 1, array);
  }
  sortedColorAnimation(array);
  return array;
}

heapSortButton.addEventListener('click', () => {
  var nodes = Array.prototype.slice.call(document.querySelector(".createColumns").children);
  async function repeatChain(times, chain) {
    for (let i = 0; i < times; i++) {
      sortingColorFunction(nodes);
      await chain(nodes);
    }
  }
  repeatChain(1, heapSort)
  })
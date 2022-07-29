
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


function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}


quickSortButton.addEventListener('click', () => {
  var nodes = Array.prototype.slice.call(document.querySelector(".createColumns").children);
  async function repeatChain(times, chain) {
    for (let i = 0; i < times; i++) {
      await chain(nodes);
    }
  }
  repeatChain(1, quickSort)
  })
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
    await delay(sortingSpeed)
    swap(0, endIdx, array);
    siftDown(0, endIdx - 1, array);
  }
  return array;
}

heapSortButton.addEventListener('click', () => {
  var nodes = Array.prototype.slice.call(document.querySelector(".createColumns").children);
  async function repeatChain(times, chain) {
    for (let i = 0; i < times; i++) {
      await chain(nodes);
    }
  }
  repeatChain(1, heapSort)
  })
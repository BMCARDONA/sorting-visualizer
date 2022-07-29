function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

function selectionSort(array) {
  let startIdx = 0;
  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx;
    for (let i = startIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) {
        smallestIdx = i;
      }
    }
    swap(startIdx, smallestIdx, array)
    startIdx++
  }
  return array; 
}


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
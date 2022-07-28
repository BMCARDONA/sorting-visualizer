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

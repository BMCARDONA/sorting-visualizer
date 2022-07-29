
const delay = (time) => new Promise((resolve) => {
  setTimeout(resolve, time)
})

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
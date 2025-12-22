let arr = [5, 3, 8, 1, 12, 28, 4];

function filterRange(arr, a, b) {
  // let arrCopy = JSON.parse(JSON.stringify(arr))
  return arr.filter(item => item >= a && item <= b)
}

// console.log(filterRange(arr, 3, 12))
// console.log(arr)


// const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73'

function getMinMax(str) {

  const arrStr = str.split(' ').filter(el => typeof (+el) === 'number' && isFinite(+el) && !isNaN(+el))
  const arrNum = arrStr.map(el => +el)
  // console.log(arrNum)
  //1)
  // return {
  //   min: Math.min(...arrNum),
  //   max: Math.max(...arrNum)
  // }
  //2)
  arrNum.sort((a, b) => a - b)
  return {
    min: arrNum[0],
    max: arrNum[arrNum.length - 1]
  }  
}

// console.log(getMinMax(inputData))
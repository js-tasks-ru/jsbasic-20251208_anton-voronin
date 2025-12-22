function ucFirst(str) {
  // ваш код...
  if(str.trim() === '') return ''
  else  return str[0].toUpperCase() + str.trim().slice(1)
}

console.log(ucFirst('sdsd')) 
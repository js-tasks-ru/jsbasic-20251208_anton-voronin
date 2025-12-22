// const str = 'webkit-transition'

function camelize(str) {

  let arr = str.split('-')
  // console.log(arr)

  const arrUpper = arr.slice(1).map(item => {
    if (item.trim() === '') return ''
    else return item[0].toUpperCase() + item.slice(1)
  })

  let result = []
  // console.log(result.concat(arr[0], arrUpper).join(''))
  return result.concat(arr[0], arrUpper).join('')
}
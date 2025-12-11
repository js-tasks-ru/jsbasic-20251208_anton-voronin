function factorial(n) {
  //// n! = n * (n - 1) * (n - 2) * ...*1

  // let result = 1
  // for (let i = 1; i <= n; i++) {
  //   result *= i
  // }
  // return result

  let result = 1
  for (let i = n; i > 1; i--) {
    result *= i
  }
  return result

}
// console.log(factorial(5))


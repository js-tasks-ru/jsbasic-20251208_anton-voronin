// let salaries = {
//   John: 1000,
//   Ann: 1600,
//   Pete: 1300,
//   month: 'December',
//   currency: 'USD',
//   isPayed: false,
//   infPlus: Infinity
// }

function sumSalary(salaries) {
  // ваш код...
  let summ = 0

  for (let val in salaries) {

    if (!isFinite(salaries[val]) || isNaN(salaries[val])) {
      //
    }
    else if (typeof (salaries[val]) === 'number') {
      summ += salaries[val]
    }
  }

  return summ
}


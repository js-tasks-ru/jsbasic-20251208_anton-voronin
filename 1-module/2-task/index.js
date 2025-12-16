function print(text) {
  console.log(text);
}

function isValid(name) {

  //1) через перебор условий c if:
  // if (name === null) return false
  // if ((name.trim()).length < 4) return false
  // if (name.indexOf(' ') !== -1) return false
  // else return true

  //2) через тернарный оператор. Возможно, визуально менее понятно:
  return (name === null || (name.trim()).length < 4 || name.indexOf(' ') !== -1) ? false : true

  //3)
  //return !!name && !name.includes(' ') && name.length >= 4;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
// sayHello();

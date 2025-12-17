let calculator = {
  read(a, b) {
    this.a = a
    this.b = b
  },
  sum() {
    if (isNumber(this.a) && isNumber(this.b)) {
      return this.a + this.b
    } else return 'sum: введите именно числа'
  },
  mul() {
    if (isNumber(this.a) && isNumber(this.b)) {
      return this.a * this.b
    } else return 'mul: введите именно числа'
  },
};

function isNumber(a) {
  if (typeof (a) !== 'number' || isNaN(a) || !isFinite(a)) return false
  else return true
}

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

function checkSpam(str) {
  // ваш код...

  // 1) используя регулярное выражение:
  // const regexp_1 = /xxx/i
  // const regexp_2 = /1xBet/i
  // console.log(regexp_1.test(str) || regexp_2.test(str))
  // return regexp_1.test(str) || regexp_2.test(str)

  //2) используя приведение toLowerCase() и includes:
  return str.toLowerCase().includes('xxx') || str.toLowerCase().includes('1xbet') 
}

// checkSpam('sds1xBets sssXx')
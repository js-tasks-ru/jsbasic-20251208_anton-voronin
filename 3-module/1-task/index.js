let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 25 };

let users = [vasya, petya, masha];

function namify(arrObjects) {
  return arrObjects.map(obj => obj.name)
}

// console.log(namify(users))

// let usrFilter = users.filter( user => user.age === 25 )
// console.log(usrFilter)

// console.log( users.filter( user => user.name[1] === 'е') )

// let names = namify(users); // ['Вася', 'Петя', 'Маша']
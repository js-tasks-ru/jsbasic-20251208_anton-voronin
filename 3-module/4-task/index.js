// const user1 = {
//   "age": 21,
//   "name": "Golden",
//   "gender": "male",
//   "balance": "$3",
// };
// const user2 = {
//   "age": 30,
//   "name": "Silver",
//   "gender": "male",
//   "balance": "$7",
// };
// const user3 = {
//   "age": 23,
//   "name": "Bronze",
//   "gender": "male",
//   "balance": "$2",
// };
// const users = [user1, user2, user3]

function showSalary(users, age) {

  const usersFilters = users.filter(user => user.age <= age)
  // console.log(usersFilters)
  const arrStr = usersFilters.map(user => `${user.name}, ${user.balance}`)
  // console.log(arrStr)
  // console.log(arrStr.join('\n'))
  return arrStr.join('\n')
}
// showSalary(users, 23)

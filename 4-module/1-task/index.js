  function makeFriendsList(friends) {
    
    const arrName = friends.map(friend => `${friend.firstName} ${friend.lastName}`)
    // console.log(arrName)
    let friendList = document.createElement('ul')

    for (let name of arrName) {

      let itemLi = document.createElement('li')
      itemLi.innerHTML = `${name}`
      friendList.appendChild(itemLi)
    }
    return friendList
  }


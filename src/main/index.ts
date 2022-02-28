console.log('Working')

interface User {
  id: string
  name: string
  email: string
}

const users: User[] = [{
  id: '1',
  name: 'Katsuo',
  email: 'lovejingwen'
},
{
  id: '2',
  name: 'Jingwen',
  email: 'lovekatsuo'
}]

const getUsers = (): User[] => {
  return users
}

const getUser = (id: string): User | undefined => {
  return users.find((user) => user.id === id)
}

const removeUser = (id: string): User | undefined => {
  const index = users.findIndex((user) => user.id === id)
  return users.slice(index, 1)[0]
}

const updateUser = (upUser: User): User => {
  const index = users.findIndex((user) => user.id === upUser.id)
  if (index < 0) throw new Error('Hey bro, we dont have that user')
  users[index].name = upUser.name
  users[index].email = upUser.email
  return users[index]
}
getUsers()
getUser('1')
removeUser('3')
console.log(updateUser({
  id: '3',
  name: 'Jingwen',
  email: 'lovekatsuo'
}))

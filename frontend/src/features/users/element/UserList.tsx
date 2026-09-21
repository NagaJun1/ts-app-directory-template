import { useGetUsers } from '../api/getUsers'

export const UserList = () => {
  const getUsers = useGetUsers()

  return (
    <ul>
      {(getUsers.data ?? []).map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

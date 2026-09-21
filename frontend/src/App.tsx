import { PACKAGE_TEST } from 'packages/common/constants'
import { UserList } from './features/users/element/UserList'

function App() {
  return (
    <>
      <h1>frontend</h1>
      <p>{PACKAGE_TEST}</p>
      <UserList />
    </>
  )
}

export default App

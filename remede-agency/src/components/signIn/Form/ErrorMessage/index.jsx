import { useSelector } from 'react-redux'
// import { store } from '../../../../redux/store'

function ErrorMessage() {
  // const state = store.getState()
  const error = useSelector((state) => state.user.message)
  return <div>{error !== 'User successfully logged in' && error}</div>
}

export default ErrorMessage

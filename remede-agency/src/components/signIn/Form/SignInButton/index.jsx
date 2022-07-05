import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { store } from '../../../../redux/store'
import { fetchOrUpdateData } from '../../../../redux/actions'

function SignInButton() {
  const navigate = useNavigate()
  //@ts-ignore
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  //@ts-ignore
  const userId = useSelector((state) => state.user.user.id)

  if (isAuthenticated) {
    navigate(`/user/${userId}`)
  }
  return (
    <button
      className="sign-in-button"
      onClick={() => {
        fetchOrUpdateData(store)
      }}
    >
      Sign In
    </button>
  )
}

export default SignInButton

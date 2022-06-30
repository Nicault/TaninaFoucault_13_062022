import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { store } from '../../../../redux/store'
import { fetchOrUpdateData } from '../../../../redux/checkReducer'

function SignInButton() {
  const navigate = useNavigate()
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  return (
    <button
      className="sign-in-button"
      onClick={() => {
        fetchOrUpdateData(store)
        if (isAuthenticated) {
          navigate('/user')
        }
      }}
    >
      Sign In
    </button>
  )
}

export default SignInButton

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { store } from '../../../../redux/store'
import { fetchOrUpdateData } from '../../../../redux/actions'

/**
 * Sign in button component.
 * Checks the authentication on click.
 * If user is authenticated, navigates to user page
 *
 * @component
 * @example
 * return (
 *   <SignInButton />
 * )
 */

function SignInButton() {
  const navigate = useNavigate()
  //@ts-ignore
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  //@ts-ignore
  const userId = useSelector((state) => state.user.user.id)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/user/${userId}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

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

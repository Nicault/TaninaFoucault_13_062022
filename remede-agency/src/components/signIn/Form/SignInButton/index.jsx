import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { store } from '../../../../redux/store'
import { fetchOrUpdateData, getProfile } from '../../../../redux/actions'

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

  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/user`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  return (
    <button
      className="sign-in-button"
      onClick={(e) => {
        e.preventDefault()
        // console.log('click')
        fetchOrUpdateData(store)
      }}
    >
      Sign In
    </button>
  )
}

export default SignInButton

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Navigate } from 'react-router-dom'
import Form from '../../components/signIn/Form'

/**
 * Sign in page component.
 * Displays the sign in page.
 *
 * @component
 * @example
 * return (
 *   <Signin />
 * )
 */

function SignIn() {
  const isAuthenticated = useSelector(
    //@ts-ignore
    (state) => state.user.user.isAuthenticated
  )
  if (isAuthenticated) return <Navigate to="/user" />

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <Form />
      </section>
    </main>
  )
}

export default SignIn

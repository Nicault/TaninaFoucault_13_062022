import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import RememberMe from '../../components/signIn/RememberMe'
// import SignInButton from '../../components/signIn/SignInButton'

import { authenticationAction } from '../../redux/store'

import CheckDatas from '../../redux/CheckDatas'

// 'tony@stark.com', 'password123'
function SignIn() {
  const dispatch = useDispatch()

  const emailRef = useRef('')
  const passwordRef = useRef('')

  // const { data } = CheckDatas()
  // console.log(data.message)

  const handleClick = (data) => {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    dispatch(authenticationAction(email, password))
    dispatch({ type: 'fillMessage', payload: { message: data.message } })

    console.log(email)
    console.log(password)
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" ref={emailRef} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <RememberMe />

          {/* <Link to="/user"> */}
          <button
            className="sign-in-button"
            onClick={() => {
              const data = CheckDatas()
              handleClick(data)
            }}
          >
            Sign In
          </button>
          {/* </Link> */}
        </form>
      </section>
    </main>
  )
}

export default SignIn

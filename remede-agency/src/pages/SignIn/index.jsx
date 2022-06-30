// import { Link } from 'react-router-dom'
// import { useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import Form from '../../components/signIn/Form'
// import RememberMe from '../../components/signIn/RememberMe'
// import ErrorMessage from '../../components/signIn/ErrorMessage'

// import { authenticationAction } from '../../redux/store'

// import useFetch from '../../redux/useFetch'

// 'tony@stark.com', 'password123'
function SignIn() {
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

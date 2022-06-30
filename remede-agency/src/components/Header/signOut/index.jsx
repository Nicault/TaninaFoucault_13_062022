import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import '../../../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'

function SignOut() {
  const dispatch = useDispatch()
  const rememberMe = useSelector((state) => state.user.rememberMe)

  function signOut() {
    dispatch({ type: 'isAuthenticate', payload: { bool: false } })
    if (!rememberMe) {
      dispatch({ type: 'fillEmail', payload: { email: null } })
      dispatch({ type: 'fillPassword', payload: { password: null } })
    }
  }
  return (
    <div>
      <Link className="main-nav-item" to="/user">
        <FontAwesomeIcon icon={faCircleUser} />
        Tony
      </Link>
      <Link className="main-nav-item" to="/" onClick={signOut}>
        <FontAwesomeIcon icon={faRightFromBracket} />
        Sign Out
      </Link>
    </div>
  )
}

export default SignOut

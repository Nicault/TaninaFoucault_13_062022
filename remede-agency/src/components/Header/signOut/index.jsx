import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import '../../../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'

/**
 * Sign out button.
 * Links to the home page on click,
 * resets user informations if he didnt select Remember me option
 *
 * @component
 * @example
 * return (
 *   <SignOut />
 * )
 */

function SignOut() {
  const dispatch = useDispatch()
  //@ts-ignore
  const rememberMe = useSelector((state) => state.user.rememberMe)
  //@ts-ignore
  const firstName = useSelector((state) => state.user.user.firstName)

  function signOut() {
    dispatch({ type: 'isAuthenticate', payload: { bool: false } })
    if (!rememberMe) {
      dispatch({ type: 'fillEmail', payload: { email: '' } })
      dispatch({ type: 'fillPassword', payload: { password: '' } })
      dispatch({
        type: 'fillEditedFirstName',
        payload: { editedFirstName: '' },
      })
      dispatch({
        type: 'fillEditedLastName',
        payload: { editedLastName: '' },
      })
      dispatch({
        type: 'updateUser',
        payload: { id: '', firstName: '', lastName: '' },
      })
    }
  }
  return (
    <div>
      <Link className="main-nav-item" to="/user">
        <FontAwesomeIcon icon={faCircleUser} />
        {firstName}
      </Link>
      <Link className="main-nav-item" to="/" onClick={signOut}>
        <FontAwesomeIcon icon={faRightFromBracket} />
        Sign Out
      </Link>
    </div>
  )
}

export default SignOut

import { Link } from 'react-router-dom'

import '../../index.css'
import argentBankLogo from '../../assets/argentBankLogo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import { useSelector } from 'react-redux'

import SignIn from './signIn'
import SignOut from './signOut'

function Header() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>{!isAuthenticated ? <SignIn /> : <SignOut />}</div>
    </nav>
  )
}

export default Header

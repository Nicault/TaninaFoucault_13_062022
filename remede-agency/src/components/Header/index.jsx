import { Link } from 'react-router-dom'

import '../../index.css'
import argentBankLogo from '../../assets/argentBankLogo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

function Header() {
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
      <div>
        <Link to="/signin" className="main-nav-item">
          {/* <i className="fa fa-user-circle"></i> */}
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </Link>
      </div>
    </nav>
  )
}

export default Header

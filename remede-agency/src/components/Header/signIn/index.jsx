import { Link } from 'react-router-dom'
import '../../../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

function SignIn() {
  return (
    <div>
      <Link to="/signin" className="main-nav-item">
        <FontAwesomeIcon icon={faCircleUser} />
        Sign In
      </Link>
    </div>
  )
}

export default SignIn

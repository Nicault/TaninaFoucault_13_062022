import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Transaction({ date, description, amount, balance }) {
  return (
    <div>
      <FontAwesomeIcon icon={faChevronDown} />
      <div>{date}</div>
      <div>{description}</div>
      <div>{amount}</div>
      <div>{balance}</div>
    </div>
  )
}

export default Transaction

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types'

/**
 * Transaction component.
 * Format transaction component
 *
 * @prop     {string}   date            Date of the transaction
 * @prop     {string}   description     Description of the transaction
 * @prop     {string}   amount          Amount on the transaction
 * @prop     {string}   balance         Balance of the transaction
 *
 * @component
 * @example
 * return (
 *   <BankSection />
 * )
 */

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

Transaction.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
}

export default Transaction

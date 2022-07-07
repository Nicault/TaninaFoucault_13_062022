import PropTypes from 'prop-types'

/**
 * Bank section component.
 * Format bank section component
 *
 * @prop     {string}   title          Title of the account    
 * @prop     {string}   amount         Amount on the account
 * @prop     {string}   description    Description of the acount
 * 
 * @component
 * @example
 * return (
 *   <BankSection />
 * )
 */

function BankSection({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

BankSection.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
export default BankSection

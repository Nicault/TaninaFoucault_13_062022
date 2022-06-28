import BankSection from '../../components/user/BankSection'
// import EditUserName from '../../components/user/EditUserName'
// import TransactionsList from '../../components/user/TransactionsList'

function User() {
  const bloc_list = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amount: '$10,928.42',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amount: '$184.30',
      description: 'Current Balance',
    },
  ]

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
        {/* <EditUserName /> */}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {bloc_list.map((element) => (
        <BankSection key={`${element.title}-${element.amount}`} {...element} />
      ))}

      {/* <TransactionsList /> */}
    </main>
  )
}

export default User

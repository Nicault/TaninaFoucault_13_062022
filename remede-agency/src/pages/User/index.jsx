import BankSection from '../../components/user/BankSection'

function User() {
  const bloc_list = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available Balance',
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
      </div>
      <h2 className="sr-only">Accounts</h2>
      {bloc_list.map((element) => (
        <BankSection key={`${element.title}-${element.amount}`} {...element} />
      ))}
    </main>
  )
}

export default User

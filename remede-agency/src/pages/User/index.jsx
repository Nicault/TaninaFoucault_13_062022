import UserHeader from '../../components/user/UserHeader'
import BankSection from '../../components/user/BankSection'

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
      <UserHeader />
      <h2 className="sr-only">Accounts</h2>
      {bloc_list.map((element) => (
        <BankSection key={`${element.title}-${element.amount}`} {...element} />
      ))}
    </main>
  )
}

export default User

import Transaction from '../Transaction'

function TransactionsList() {
  const bloc_list = [
    {
      date: 'June 20th, 2020',
      description: 'Golden Sun Bakery',
      amount: '$5.00',
      balance: '$2082.76',
    },
  ]

  return (
    <section className="account">
      {bloc_list.map((element) => (
        <Transaction
          key={`${element.date}-${element.description}`}
          {...element}
        />
      ))}
    </section>
  )
}

export default TransactionsList

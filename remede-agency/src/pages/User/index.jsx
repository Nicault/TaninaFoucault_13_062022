import React from 'react'
import UserHeader from '../../components/user/UserHeader'
import BankSection from '../../components/user/BankSection'
// import { useDispatch } from 'react-redux/es/exports'
import { useEffect } from 'react'
import { store } from '../../redux/store'
import { getProfile } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'

/**
 * User page component.
 * Displays the user page.
 * Fills the bank section list.
 *
 * @component
 * @example
 * return (
 *   <User />
 * )
 */

function User() {
  // sessionStorage.clear()
  console.log('làààààààààààààààààà')
  console.log(localStorage)

  const navigate = useNavigate()

  //@ts-ignore
  const token = useSelector((state) => state.user.token)

  useEffect(() => {
    if (!token) {
      navigate(`/signIn`)
    } else {
      getProfile(store)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

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

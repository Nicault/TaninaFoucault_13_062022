import { useState, useEffect } from 'react'
import { store, updateStatus } from './store'

function CheckDatas() {
  const url = 'http://localhost:3001/api/v1/user/login'

  const [data, setData] = useState({})

  const [isLoading, setLoading] = useState(true)

  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return

    setLoading(true)

    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // email: 'tony@stark.com',
            // password: 'password123',
            email: store.email,
            password: store.password,
          }),
        })
        const data = await response.json()

        setData(data)
      } catch (err) {
        console.log(err)

        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  console.log(data)
  store.dispatch(updateStatus(data.status))

  return { isLoading, data, error }
}

export default CheckDatas

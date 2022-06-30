import { useState, useEffect } from 'react'
import { state } from './store'

import { useDispatch } from 'react-redux/es/hooks/useDispatch'

function useFetch() {
  const dispatch = useDispatch()

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
            email: state.user.authentication.email,
            password: state.user.authentication.password,
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

  // console.log('iciiiiiiiiiiiii')
  // console.log(state.user.authentication.email)
  dispatch({
    type: 'updateStatus',
    payload: { status: data.status },
  })
  // dispatch(updateStatus(data.status))

  return { isLoading, data, error }
}

export default useFetch

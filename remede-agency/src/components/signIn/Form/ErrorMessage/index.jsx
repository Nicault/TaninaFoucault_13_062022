import { useSelector } from 'react-redux'
import styled from 'styled-components'

/**
 * Error message component.
 * Updates the error message state.
 *
 * @component
 * @example
 * return (
 *   <ErrorMessage />
 * )
 */

function ErrorMessage() {
  //@ts-ignore
  const error = useSelector((state) => state.user.message)
  console.log(error)
  return (
    <Wrapper>
      {error === 'Error: User not found!' && <div>{error}</div>}
      {error === 'Error: Password is invalid' && <div>{error}</div>}
    </Wrapper>
  )
}

export default ErrorMessage

const Wrapper = styled.div`
  color: red;
  padding-top: 20px;
`

import produce from 'immer'

const initialState = {
  status: 'void',
  data: null,
  error: null,
}

export const checkFetching = () => ({ type: 'check/fetching' })
export const checkResolved = (data) => ({
  type: 'check/resolved',
  payload: data,
})
export const checkRejected = (error) => ({
  type: 'check/rejected',
  payload: error,
})

export default function checkReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'check/fetching': {
        if (draft.status === 'void') {
          draft.status = 'pending'
          return
        }
        if (draft.status === 'rejected') {
          draft.error = null
          draft.status = 'pending'
          return
        }
        if (draft.status === 'resolved') {
          draft.status = 'updating'
          return
        }
        return
      }
      case 'check/resolved': {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.data = action.payload
          draft.status = 'resolved'
          return
        }
        return
      }
      case 'check/rejected': {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.error = action.payload
          draft.data = null
          draft.status = 'rejected'
          return
        }
        return
      }
      default:
        return state
    }
  })
}

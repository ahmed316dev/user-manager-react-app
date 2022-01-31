import {
  CREATE_USER,
  FETCH_USERS,
  UPDATE_USER,
  DELETE_USER,
} from './users.types'

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, [action.payload.id]: action.payload }

    case FETCH_USERS:
      const allUsers = action.payload
      return { ...state, ...allUsers }

    case UPDATE_USER:
      return { ...state, [action.payload.id]: action.payload }

    case DELETE_USER:
      delete state[action.payload]
      return { ...state }

    default:
      return state
  }
}

export default usersReducer

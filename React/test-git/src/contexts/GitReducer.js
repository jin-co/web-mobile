const gitReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'GET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload
      }
    case 'CLEAR':
      return {
        ...state,
        users: []
      }
    default:
      return state
  }
}

export default gitReducer
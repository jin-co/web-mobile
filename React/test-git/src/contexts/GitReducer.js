const gitReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'GET_USER_REPOS':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos
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
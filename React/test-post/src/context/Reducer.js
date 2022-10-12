import React from 'react'

const Reducer = (state, action) => {
  switch (action.type) {
    case 'GET_FEEDS':
      return {state}
    case 'ADD_FEEDS':
      return state
    case 'DELETE_FEEDS':
      return state
    case 'EDIT_FEEDS':
      return state
    default:
      return state
  }  
}

export default Reducer

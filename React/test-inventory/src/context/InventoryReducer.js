import React from 'react'

export const InventoryReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        inventory: action.payload
      }
    default:
      return state
  }
}

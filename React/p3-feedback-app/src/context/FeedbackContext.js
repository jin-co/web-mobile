import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([{ id: 1, text: 'hh' }])
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

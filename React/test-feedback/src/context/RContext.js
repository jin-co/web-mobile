import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'
const RContext = createContext()

export const RProvider = (props) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  return <RContext.Provider value={{ feedback }}>{props.children}</RContext.Provider>
}

export default RContext
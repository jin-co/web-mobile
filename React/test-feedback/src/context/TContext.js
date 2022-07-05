import { useState, createContext } from "react";
import FeedbackData from "../data/FeedbackData";

const TContext = createContext()

export const TProvider = (props) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <TContext.Provider value={{feedback}}>
      {props.children}
    </TContext.Provider>
  )

}

export default TContext
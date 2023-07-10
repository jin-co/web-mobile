import { useContext } from "react"
import FeedContext from "../context/Feed"

export const FeedStat = () => {
  const { feed } = useContext(FeedContext)
  let avg = feed.reduce((acc, cur) => {
    return (acc + cur.rating) / feed.length
  }, 0)
  avg = avg.toFixed(2)
  return (
    <div className="feedback-stats">
      <p>
        {isNaN(avg) ? 0 : avg}
      </p>
      <p>
        {feed.length}
      </p>
    </div>
  )
}

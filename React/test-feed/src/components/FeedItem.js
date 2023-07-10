import { useContext } from "react"
import { Card } from "./shared/Card"
import { FaEdit, FaTimes } from 'react-icons/fa'
import FeedContext from "../context/Feed"

export const FeedItem = ({ item }) => {
  const { deleteFeed, selectFeed } = useContext(FeedContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <FaTimes
        color="red"
        className="close"
        onClick={() => deleteFeed(item.id)}
      />
      <FaEdit
        color="blue"
        className="edit"
        onClick={() => selectFeed(item)}
      />
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

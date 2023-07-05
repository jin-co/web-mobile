import { Card } from "./shared/Card"
import { FaEdit, FaTimes } from 'react-icons/fa'

export const FeedItem = ({ item }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <FaTimes
        color="red"
        className="close"
      />
      <FaEdit
        color="blue"
        className="edit"
      />
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

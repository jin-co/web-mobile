import { useContext } from 'react'
import { Card } from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedContext from '../context/FeedContext'

export const FeedItem = ({ feed }) => {
  const { deleteFeed, handleSetSelectedFeed } = useContext(FeedContext)
  return (
    <Card>
      <div className="num-display">{feed.rating}</div>
      <FaTimes
        onClick={() => deleteFeed(feed.id)}
        color="red"
        className="close"
      />
      <FaEdit
        className='edit'
        color='purple'
        onClick={() => handleSetSelectedFeed(feed)}
      />
      <div className="text-display">{feed.text}</div>
    </Card>
  )
}

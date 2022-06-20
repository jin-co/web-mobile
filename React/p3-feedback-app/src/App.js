import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'
import FeedbackStats from './components/FeedbackStats'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure? ')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  /** practice*/
  // const title = 'Blog post'
  // const body = 'body'
  // const comments = [
  //   { id: 1, text: 'comment 1' },
  //   { id: 2, text: 'comment 2' },
  //   { id: 3, text: 'comment 3' },
  //   { id: 4, text: 'comment 4' },
  // ]

  // const loading = false
  // const showComments = false
  // const commentBlock = (
  //   <div className="comment">
  //     <h3>Comments ({comments.length})</h3>
  //     <ul>
  //       {comments.map((c, idx) => (
  //         <li key={idx}>c.text</li>
  //       ))}
  //     </ul>
  //   </div>
  // )

  // if (loading) return <h1>Loading...</h1>
  /** practice*/

  const styles = { backgroundColor: 'blue' }

  return (
    // <div>
    //   <h1>Hi</h1>
    //   {/* {showComments ? (
    //     <div className="comment">
    //       <h3>Comments ({comments.length})</h3>
    //       <ul>
    //         {comments.map((c, idx) => (
    //           <li key={idx}>c.text</li>
    //         ))}
    //       </ul>
    //     </div>
    //   ) : (
    //     null
    //   )} */}
    //   {showComments && commentBlock}
    // </div>

    <>
      <Header text={'Hello'} />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App

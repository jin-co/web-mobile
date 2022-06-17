import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

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
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App

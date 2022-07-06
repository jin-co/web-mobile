import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'
import Post from './components/Post'
import { FeedackProvider } from './context/FeedbackContext'

const App = () => {
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

  const [feedback, setFeedback] = useState(FeedbackData)

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
    <FeedackProvider>
      <Router>
        <Header text="Hello" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />

            {/* param eg */}
            <Route path="/post/:id/:name" element={<Post />} />
            <Route path="/post/*" element={<Post />} />
          </Routes>

          {/* navlink eg */}
          {/* <Card>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </Card> */}

          <AboutIconLink />
        </div>
      </Router>
    </FeedackProvider>
  )
}

export default App

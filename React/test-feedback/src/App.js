import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import Header from './components/shared/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import { useState } from 'react'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <Router>
    <>    
      <Header />
      <main className="container">
        <Routes>
          <Route exact path='/' element={
            <>
<FeedbackStats feedback={feedback} />
        <FeedbackForm feedback={feedback} />
        <FeedbackList feedback={feedback} />
            </>
          } />
          <Route path='/about' element={<About/>}/>
          
        </Routes>        
      </main>
    </>
    </Router>
  )
}

export default App

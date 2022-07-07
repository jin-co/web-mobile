import FeedbackForm from './component/FeedbackForm'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './component/FeedbackList'
import FeedbackItem from './component/FeedbackItem'
import FeedbackStats from './component/FeedbackStats'
import Header from './component/shared/Header'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats />
        <FeedbackForm />
        <FeedbackList />
      </div>
    </>
  )
}

export default App

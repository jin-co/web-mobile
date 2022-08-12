import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStat from './components/FeedbackStat'
import Header from './components/shared/Header'
import { FeedProvider } from './context/FeedContext'

const App = () => {
  return (
    <FeedProvider>
      <>
        <Header />
        <div className="container">
          <FeedbackStat />
          <FeedbackForm />
          <FeedbackList />
        </div>
      </>
    </FeedProvider>
  )
}

export default App

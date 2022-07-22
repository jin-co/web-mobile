import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import Header from './components/shared/Header'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
  return (
    <>
      <Header/>
      <main className='container'>
        <FeedbackList/>
      </main>
    </>
  )
}

export default App
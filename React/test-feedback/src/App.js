import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'

const App = () => {
  const items = [
    { id: 1, text: 'text 1' },
    { id: 2, text: 'text 2' },
    { id: 3, text: 'text 3' },
    { id: 4, text: 'text 4' },
  ]
  return (
    <>
      <Header text="Hello" />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  )
}

export default App

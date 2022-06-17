import Header from './Header'

const title = 'tom'
const show = true
const comments = [
  { id: 1, text: 'text 1' },
  { id: 2, text: 'text 2' },
  { id: 3, text: 'text 3' },
  { id: 4, text: 'text 4' },
]
const App = () => {
  return (
    <div>
      <Header />
      good
      {show && <div className="comment">
        <ul>
          {comments.map((c, idx) => (
            <li key={c.id}>{c.text}</li>
          ))}
        </ul>
      </div>}      
    </div>
  )
}

export default App

import { About } from './components/About'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Post } from './components/Post'
import { FeedProvider } from './context/FeedContext'

function App() {
  return (
    <FeedProvider>
      <div>
        <Header />
        <main className='container'>
          <Home />
          <Post />
          <About />
        </main>
      </div>
    </FeedProvider>
  )
}

export default App
import { About } from './components/About'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Post } from './components/Post'

function App() {
  return (
    <div>
      <Header />
      <main className='container'>
        <Home />
        <Post />
        <About />
      </main>
    </div>
  )
}

export default App
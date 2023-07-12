import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Notfound } from './pages/Notfound'
import { User } from './pages/User'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Alert } from './components/layout/Alert'

export const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Nav />
        <main className="container mx-auto px-3 pb-12">
          <Alert />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/user/:login' element={<User />} />
            <Route exact path='/about' element={<About />} />
            <Route path='/*' element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

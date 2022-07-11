import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <Router>
      <div>
        <h1>hh</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="flex flex-col justify-between h-screen">
                  <Navbar />

                  <main className="container mx-auto px-3 pb-12">Content</main>
                  <Footer />
                </div>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App

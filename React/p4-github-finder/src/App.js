import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

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

                  <main>Content</main>
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

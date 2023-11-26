import React from 'react'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Notfound } from './pages/Notfound'
import { User } from './pages/User'

export const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Notfound />
      <User />
    </div>
  )
}

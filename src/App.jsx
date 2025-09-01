import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import NotificationContainer from './Components/Organisms/NotificationContainer'
import Cart from './Pages/Cart'
import Xiao from './Pages/Xiao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Xiao />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <NotificationContainer />
    </Router>
    </>
  )
}

export default App

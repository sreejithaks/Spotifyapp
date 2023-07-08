import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Spoty from './pages/Spoty.jsx'
import Register from './pages/register'
import Login from './pages/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
<Route path='/' exact element={<Spoty/>}/>
<Route path='/Login' exact element={<Login/>}/>
<Route path='/Register' exact element={<Register/>}/>
     
      </Routes>
    </>
  )
}

export default App

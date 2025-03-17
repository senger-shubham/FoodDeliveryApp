import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <div>
      <Home/>
      <ToastContainer/>
    </div>
  )
}

export default App

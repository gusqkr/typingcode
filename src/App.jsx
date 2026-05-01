import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Start from './Start'
import Home from './Home'
import CssPage from './CssPage'
import JsPage from './JsPage'
import ReactPage from './ReactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/home" element={<Home />} />
      <Route path="/csspage" element={<CssPage />} />
      <Route path="/jspage" element={<JsPage />} />
      <Route path="/reactpage" element={<ReactPage />} />
    </Routes>
  )
}

export default App

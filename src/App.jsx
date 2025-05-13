import { useState, useEffect } from 'react'
import './App.css'
import { RunsPage } from './RunsPage'
import { LevelsPage } from './LevelsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <p>p</p>
      <BrowserRouter>
      <Routes>
      <Route path="/runs" element={<RunsPage />} />
      <Route path="/levels" element={<LevelsPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
import './App.css'
import { RunsPage } from './RunsPage'
import { LevelsPage } from './LevelsPage'
import { TrackerNonstopOneTwenty} from './TrackerNonstopOneTwenty'
import { TrackerSeventy } from './TrackerSeventy'


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <p>p</p>
      <BrowserRouter>
      <Routes>
      <Route path="/runs" element={<RunsPage />} />
      <Route path="/levels" element={<LevelsPage />} />
      <Route path="/trackers/nonstop-120" element={<TrackerNonstopOneTwenty />} />
      <Route path="/trackers-70" element={<TrackerSeventy />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

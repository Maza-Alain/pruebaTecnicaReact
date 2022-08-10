import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Pregunta10 from './components/Pregunta10'
import Pregunta6 from './components/Pregunta6'
import Pregunta9 from './components/Pregunta9'
import Teoricas from './components/Teoricas'
import "./index.scss"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Pregunta6/>}/>
        <Route path='/9' element={<Pregunta9/>}/>
        <Route path='/10' element={<Pregunta10/>}/>
        <Route path='/teoricas' element={<Teoricas/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App

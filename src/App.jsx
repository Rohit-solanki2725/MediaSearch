import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className=" min-h-[80vh] w-full text-white bg-(--c4)">
     <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>

      <ToastContainer />
      
    </div>
  )
}

export default App


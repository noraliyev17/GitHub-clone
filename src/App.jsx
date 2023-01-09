import { useState,useEffect } from 'react'
import './App.css'
import Footer from './companents/Footer/Footer/Footer'
import Header from './companents/Header/Header'
import Main from './companents/Main/Main/Main'

function App() {

  const [malumot,setMalumot]=useState([])

  return (

    <>
      <Header malumot={malumot} setMalumot={setMalumot} />
      <Main malumot={malumot} setMalumot={setMalumot}/>
      <Footer/>
    </>
  )
}

export default App

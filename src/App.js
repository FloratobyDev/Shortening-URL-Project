import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.scss'
import Hero from './components/hero/Hero'
import Search from './components/search/Search'
import Footer from './components/footer/Footer'

const App = () => {


  return (
    <div className='app-container'>
      <Navbar />
      <Hero />
      <Search />
      <Footer />
    </div>
  )
}

export default App
